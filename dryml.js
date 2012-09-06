CodeHighlighter.addStyle("dryml", {
	paramdec : {
		exp : /param(='[^']*'|"[^"]*"|\b)/
	},
	comment : {
		exp: /&lt;!\s*(--([^-]|[\r\n]|-[^-])*--\s*)&gt;/
	},
	parameter : {
		exp: /(&lt;\/?)([a-zA-Z-]+:)([^a-z_])/, 
		replacement: "$1<span class=\"$0\">$2</span>$3"
	},
	tag : {
		exp: /(&lt;\/?)([a-zA-Z-0-9]+\s?)/, 
		replacement: "$1<span class=\"$0\">$2</span>"
	},
	string : {
		exp  : /'[^']*'|"[^"]*"/
	},
	attribute : {
		exp: /\b([a-zA-Z-:]+)(=|&gt;|\/)/, 
		replacement: "<span class=\"$0\">$1</span>$2"
	},
	doctype : {
		exp: /&lt;!DOCTYPE([^&]|&[^g]|&g[^t])*&gt;/
	}
});