declare var marked: any;

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
	document.getElementById("content").innerHTML = parseMarkdown(markdown);
}
function parseMarkdown(markdownText:string):string {
	const htmlText = marked.parse(markdownText);

	return htmlText.trim()
}
