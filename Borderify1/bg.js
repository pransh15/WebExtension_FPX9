const countMe = info => {
	const selectedText = info.selectedText;
	const totalWords = selectedText.trim().split('');

	browser.notification.create({
	"type":"basic",
	"title":"Word Count",
	"message":`Total words: ${totalWords.length}\nTotal
	Character: ${selectionText.length}`
)};
}

browser menus.create({
	id:"count-me",
	title:"Word Count",
	contexts:["all"]
});

browser.menus.onclicked.addListner(countMe);