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
    loadBlog();
});
function loadBlog() {
    var q = new URLSearchParams(location.search);
    var page = q.get('page');
    setBlog(page);
}
function setBlog(fName) {
    $ajaxUtils.sendGetRequest("./blog/" + fName + ".md", function (response) {
        var markdown = response.responseText;
        setBlogContent(markdown);
    });
}
function setBlogContent(markdown) {
    var fileYaml = yaml.parseFromFile(markdown);
    doStuffWithYaml(fileYaml);
    document.getElementById("content").innerHTML = parseMarkdown(markdown);
}
function parseMarkdown(markdownText) {
    var noYaml = yaml.removeFrontmatter(markdownText);
    var htmlText = marked.parse(noYaml);
    return htmlText.trim();
}
function doStuffWithYaml(object) {
    console.log(object);
    if (object.yaml) {
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
    var mainElement = document.getElementById("yamlClass");
    if (clearFirst) {
        mainElement.className = "";
    }
    mainElement.classList.add(cssClass);
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