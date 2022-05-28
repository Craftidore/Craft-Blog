declare const marked: any;
declare const jsyaml: any;
declare const yaml: any;
declare const logoColor: any;
declare const Prism: any;


addEventListener("DOMContentLoaded", (event) => {
	(() => {
		let q:URLSearchParams = getURLParams();
		let page:string = q.get("page");
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
	marked.setOptions({//stolen from https://benborgers.com/posts/marked-Prism
		highlight: (code:any, lang:any) => {
			if (Prism.languages[lang]) {
			return Prism.highlight(code, Prism.languages[lang], lang);
			} else {
			return code;
			}
		},
	});

	determineColorStyle("default");
	loadBlog();
});

function loadBlog() {
	let q:URLSearchParams = new URLSearchParams(location.search);
	let page:string = q.get('page');
	setSidebar();
	setBlog(page);
}

function setBlog(fName:string) {
	$ajaxUtils.sendGetRequest("./blog/"+fName+".txt", (response:any) => {
		let markdown = response.responseText;
		setBlogContent(markdown);
	});
}
function setSidebar() {
	$ajaxUtils.sendGetRequest("./blog/sidebar/mainSidebar.txt", (response:any) => {
		let markdown = response.responseText;
		setSidebarContent(markdown);
	});
}
function setSidebarContent(markdown:string){
	document.getElementById("sidebar").innerHTML = parseMarkdown(markdown);
	setLinks();
}

function setBlogContent(markdown:string) {
	var fileYaml = yaml.parseFromFile(markdown);
	doStuffWithYaml(fileYaml);

	document.getElementById("content").innerHTML = parseMarkdown(markdown);
	logoColor.loadLogos()
	setLinks();
}
function parseMarkdown(markdownText:string):string {
	var noYaml:string = yaml.removeFrontmatter(markdownText);
	var withComments:string = noYaml.replace(/([^\\]|^)%%(([^%])*)%%/gm, "$1<!--$2-->");
	var withAliasInternalLinks = withComments.replace(/([^\\]|^)\[\[ ?(.*)\|(.*)\]\]/g, "$1<a class=\"internal-link\" page=\"$2\">$3</a>");
	var withNoAliasInternalLinks:string = withAliasInternalLinks.replace(/([^\\]|^)\[\[ ?([^\|\r\n]*)\]\]/g, "$1<a class=\"internal-link\" page=\"$2\">$2</a>")
	const htmlText = marked.parse(withNoAliasInternalLinks);

	return htmlText.trim()
}

function doStuffWithYaml(object:any) {
	console.log(object);
	if (object.yaml) {
		if (object.title){
			document.getElementsByTagName("title")[0].innerText = object.title;
		}
		if (object.theme){
			determineColorStyle(object.theme);
		}
	}
	else {
		console.log("Yaml disabled.");
	}
	return;
}

function setLinks() {
	let links:any = document.getElementsByClassName("internal-link");

	for (let i:number = 0;i < links.length; i++) {
		let link:HTMLElement = links[i];
		// @ts-ignore: type checking
		link.setAttribute("href", "?" + adjustedURLParams(link.getAttribute("page")));
	}
	function adjustedURLParams(pageName:string){
		let urlParams:URLSearchParams = getURLParams();
		urlParams.set("page", pageName);
		return urlParams.toString();
	}
}
function getURLParams() {
	let urlParams:URLSearchParams = new URLSearchParams(location.search);
	return urlParams;
}
function changeURLParam(key:string, value:string) {
	let urlParams:URLSearchParams = getURLParams();
	urlParams.set(key, value);
	location.search = urlParams.toString();
	return;
}
function setURLParams(values:any) {
	let keys = values.keys();
	let urlParams = new URLSearchParams();
	for (let i:number = 0; i < keys.length; i++) {
		urlParams.set(keys[i], values[keys[i]]);
	}
	location.search = urlParams.toString();
	return;
}

function determineColorStyle(yaml:string) {
	let theme;
	theme = yaml;
	if (getURLParams().get('theme')) {
		theme = getURLParams().get('theme');
	}

	addStylingClass(theme, true);
}

function addStylingClass(cssClass:string, clearFirst:boolean) {
	var mainElement:HTMLElement = document.getElementsByTagName("html")[0];
	if (clearFirst) {
		mainElement.className = "";
	}
	mainElement.classList.add(cssClass);
}
