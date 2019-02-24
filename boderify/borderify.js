
/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
{
	"description": "Adds a solid red border to all webpages matching mozilla.org.",
	"manifest_version": 2,
	"name":"boderify" ,
	"version":"1.0",
	"homepage_url": "https://github.com/mdn/webextensions-examples/trees/master/borderify",
	"icons": {
		"12":"icons/border-12.png"
	},
	"content_scripts":[
		{
			"matches":["*://*.mozilla.org/*"],
			"js": ["borderify.js"]
		}
	]
}