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
    document.getElementById("content").innerHTML = parseMarkdown(markdown);
}
function parseMarkdown(markdownText) {
    var htmlText = marked.parse(markdownText);
    return htmlText.trim();
}
(function (global) {
})(window);
//# sourceMappingURL=main.js.map