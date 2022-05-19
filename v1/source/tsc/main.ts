declare const marked: any;
declare const jsyaml: any;
declare const yaml: any;
declare const logoColor: any;
declare const Prism: any;


addEventListener("DOMContentLoaded", (event) => {
	(() => {
		let q:URLSearchParams = new URLSearchParams(location.search);
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


	loadBlog();
});

function loadBlog() {
	let q:URLSearchParams = new URLSearchParams(location.search);
	let page:string = q.get('page');
	setSidebar();
	setBlog(page);
}

function setBlog(fName:string) {
	$ajaxUtils.sendGetRequest("./blog/"+fName+".md", (response:any) => {
		let markdown = response.responseText;
		setBlogContent(markdown);
	});
}
function setSidebar() {
	$ajaxUtils.sendGetRequest("./blog/sidebar/mainSidebar.md", (response:any) => {
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
	var withAliasInternalLinks = withComments.replace(/([^\\]|^)\[\[ ?(.*)\|(.*)\]\]/, "$1<a class=\"internal-link\" page=\"$2\">$3</a>");
	var withNoAliasInternalLinks:string = withAliasInternalLinks.replace(/([^\\]|^)\[\[ ?([^\|\r\n]*)\]\]/gm, "$1<a class=\"internal-link\" page=\"$2\">$2</a>")
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
			addStylingClass(object.theme, true);
		}
	}
	else {
		console.log("Yaml disabled.");
	}
	return;
}

function addStylingClass(cssClass:string, clearFirst:boolean) {
	var mainElement:HTMLElement = document.getElementsByTagName("html")[0];
	if (clearFirst) {
		mainElement.className = "";
	}
	mainElement.classList.add(cssClass);
}

function setLinks() {
	let links:any = document.getElementsByClassName("internal-link");

	for (let i:number = 0;i < links.length; i++) {
		let link:HTMLElement = links[i];
		// @ts-ignore: type checking
		link.setAttribute("href", "?" + adjustedURLParams(link.getAttribute("page")));
	}
	function adjustedURLParams(pageName:string){
		let urlParams:URLSearchParams = new URLSearchParams(location.search);
		urlParams.set("page", pageName);
		return urlParams.toString();
	}
}