CodeHighlighter.addStyle("applescript",{
	comment : {
		exp  : /--[^\n]+|#![^\n]+/
	},
	brackets : {
		exp  : /\(|\)/
	},
	string : {
		exp  : /"[^"\\]*(\\.[^"\\]*)*"/
	},
	keywords : {
		exp  : /\b(about|above|after|against|and|apart[\s]+from|around|as|aside[\s]+from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|contain|contains|contains|continue|copy|div|does|eighth|else|end|equal|equals|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead[\s]+of|into|is|it|its|last|local|me|middle|mod|my|ninth|not|of|on|onto|or|out[\s]+of|over|prop|property|put|ref|reference|repeat|return|returning|script|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/
	},
	global : {
		exp : /\b(AppleScript('s)?|current[\s]+application|missing[\s]+value|false|pi|true|version)\b/
	}
});