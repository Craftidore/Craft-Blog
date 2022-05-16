declare const marked: any;
declare const jsyaml: any;
declare const yaml: any;

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


	loadBlog();
});

function loadBlog() {
	let q:URLSearchParams = new URLSearchParams(location.search);
	let page:string = q.get('page');
	setBlog(page)
}

function setBlog(fName:string) {
	$ajaxUtils.sendGetRequest("./blog/"+fName+".md", (response:any) => {
		let markdown = response.responseText;
		setBlogContent(markdown);
	});
}

function setBlogContent(markdown:string) {
	var fileYaml = yaml.parseFromFile(markdown);
	doStuffWithYaml(fileYaml);

	document.getElementById("content").innerHTML = parseMarkdown(markdown);
}
function parseMarkdown(markdownText:string):string {
	var noYaml = yaml.removeFrontmatter(markdownText);
	const htmlText = marked.parse(noYaml);

	return htmlText.trim()
}

function doStuffWithYaml(object:any) {
	console.log(object);
	if (object.yaml) {
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