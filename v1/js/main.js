// Set up a namespace for our utility
var $ajaxUtils = new Object();
// Returns an HTTP request object
function getRequestObject() {
    if (window.XMLHttpRequest) {
        // Most current ajax object.
        return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
        window.alert("Ajax is not supported!");
        return (null);
    }
}
// Makes an Ajax GET request to 'requestUrl'
$ajaxUtils.sendGetRequest =
    function (requestUrl, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange =
            function () {
                handleResponse(request, responseHandler);
            }; // This function will get called when anything changes. We don't want to make request and responseHandler window, as ajax works asynchronously. 
        request.open("GET", requestUrl, true); // GET request, with the given url, and the boolean says "yes, this should be async"
        request.send(null); // for POST only
    };
// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request, responseHandler) {
    if ((request.readyState == 4) && // There are many ready states (I think 4). We want to be on '4'
        (request.status == 200)) {
        responseHandler(request);
    }
}
(function (global) {
    addEventListener("DOMContentLoaded", function (event) {
        var menu = document.getElementById("hamburger-menu");
        menu.addEventListener("click", hamburger.toggleMenu);
    });
    var hamburger = {};
    var MENUOPEN = "Menu is open";
    var MENUCLOSED = "Menu is closed";
    var menuState = MENUCLOSED;
    var openMenu = function () {
        var menu = document.getElementById("sidebar");
        menu.style.display = "block";
        menuState = MENUOPEN;
    };
    var closeMenu = function () {
        var menu = document.getElementById("sidebar");
        menu.style.display = "none";
        menuState = MENUCLOSED;
    };
    hamburger.toggleMenu = function () {
        if (menuState === MENUOPEN) {
            closeMenu();
        }
        else if (menuState === MENUCLOSED) {
            openMenu();
        }
        else {
            throw Error("Invalid menuState: " + menuState);
        }
    };
})(window);
(function (global) {
    var logoColor = {};
    var src = "./source/img/Logo.png";
    logoColor.loadLogos = function () {
        // @ts-ignore: type error
        var canvases = document.getElementsByClassName("logo");
        console.log(canvases);
        for (var cnum = 0; cnum < canvases.length; cnum++) {
            loadLogo(canvases[cnum]);
        }
    };
    var loadLogo = function (canvas) {
        var ctx = canvas.getContext("2d");
        var img = new Image;
        //wait for the image to load
        img.onload = function () {
            //Draw the original image so that you can fetch the colour data
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            /*
            imgData.data is a one-dimensional array which contains
            the respective RGBA values for every pixel
            in the selected region of the context
            (note i+=4 in the loop)
            */
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 31; //Red, 0-255
                imgData.data[i + 1] = 199; //Green, 0-255
                imgData.data[i + 2] = 66; //Blue, 0-255
                /*
                imgData.data[i+3] contains the alpha value
                which we are going to ignore and leave
                alone with its original value
                */
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the original image
            ctx.putImageData(imgData, 0, 0); //paint the new colorised image
        };
        //Load the image!
        img.src = src;
    };
    global.logoColor = logoColor;
})(window);
addEventListener("DOMContentLoaded", function (event) {
    (function () {
        var q = new URLSearchParams(location.search);
        var page = q.get("page");
        if (page === "" || page === null) {
            q.set("page", "Home");
            location.search = q.toString();
        }
    })();
    // set marked settings
    marked.use({
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
    });
    marked.setOptions({
        highlight: function (code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang);
            }
            else {
                return code;
            }
        },
    });
    loadBlog();
});
function loadBlog() {
    var q = new URLSearchParams(location.search);
    var page = q.get('page');
    setSidebar();
    setBlog(page);
}
function setBlog(fName) {
    $ajaxUtils.sendGetRequest("./blog/" + fName + ".md", function (response) {
        var markdown = response.responseText;
        setBlogContent(markdown);
    });
}
function setSidebar() {
    $ajaxUtils.sendGetRequest("./blog/sidebar/mainSidebar.md", function (response) {
        var markdown = response.responseText;
        setSidebarContent(markdown);
    });
}
function setSidebarContent(markdown) {
    document.getElementById("sidebar").innerHTML = parseMarkdown(markdown);
    setLinks();
}
function setBlogContent(markdown) {
    var fileYaml = yaml.parseFromFile(markdown);
    doStuffWithYaml(fileYaml);
    document.getElementById("content").innerHTML = parseMarkdown(markdown);
    logoColor.loadLogos();
    setLinks();
}
function parseMarkdown(markdownText) {
    var noYaml = yaml.removeFrontmatter(markdownText);
    var withComments = noYaml.replace(/([^\\]|^)%%(([^%])*)%%/gm, "$1<!--$2-->");
    var withAliasInternalLinks = withComments.replace(/([^\\]|^)\[\[ ?(.*)\|(.*)\]\]/g, "$1<a class=\"internal-link\" page=\"$2\">$3</a>");
    var withNoAliasInternalLinks = withAliasInternalLinks.replace(/([^\\]|^)\[\[ ?([^\|\r\n]*)\]\]/g, "$1<a class=\"internal-link\" page=\"$2\">$2</a>");
    var htmlText = marked.parse(withNoAliasInternalLinks);
    return htmlText.trim();
}
function doStuffWithYaml(object) {
    console.log(object);
    if (object.yaml) {
        if (object.title) {
            document.getElementsByTagName("title")[0].innerText = object.title;
        }
        if (object.theme) {
            addStylingClass(object.theme, true);
        }
    }
    else {
        console.log("Yaml disabled.");
    }
    return;
}
function addStylingClass(cssClass, clearFirst) {
    var mainElement = document.getElementsByTagName("html")[0];
    if (clearFirst) {
        mainElement.className = "";
    }
    mainElement.classList.add(cssClass);
}
function setLinks() {
    var links = document.getElementsByClassName("internal-link");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        // @ts-ignore: type checking
        link.setAttribute("href", "?" + adjustedURLParams(link.getAttribute("page")));
    }
    function adjustedURLParams(pageName) {
        var urlParams = new URLSearchParams(location.search);
        urlParams.set("page", pageName);
        return urlParams.toString();
    }
}
(function (global) {
    var yaml = {};
    var getFromFile = function (markdown) {
        var yamlFrontmatter = /^---(\r|\n)((.|\r|\n)+)---/i.exec(markdown);
        if (yamlFrontmatter) {
            return yamlFrontmatter[2];
        }
        else { // pointless else, but added for clarification
            return "yaml: false";
        }
    };
    var parse = function (yml) {
        return jsyaml.load(yml);
    };
    yaml.parseFromFile = function (markdown) {
        var parsedYaml = parse(getFromFile(markdown));
        if (parsedYaml.yaml === undefined) {
            //`yaml: true` unless explicitely stated as `yaml: false` in the frontmatter
            parsedYaml.yaml = true;
        }
        return parsedYaml;
    };
    yaml.removeFrontmatter = function (markdown) {
        var yamlFrontmatter = /^---(\r|\n)((.|\r|\n)+)---(\r|\n)((.|\r|\n)+)/i.exec(markdown);
        if (yamlFrontmatter) {
            return yamlFrontmatter[5];
        }
        else { // pointless else, but added for clarification
            return markdown;
        }
    };
    global.yaml = yaml;
})(window);
//# sourceMappingURL=main.js.map