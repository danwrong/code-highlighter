CodeHighlighter.addStyle("haskell",{
	comments : {
		exp  : /(--[^\n]*(\n|$))|(\{-[^-]*-+([^\}][^-]*-+)*\})/
	},
	brackets : {
		exp  : /\(|\)/
	},
	lists : {
		exp  : /\[|\]/
	},
	stringexp : {
		exp  : /"[^"]*"/
	},
	keywords : {
		exp  : /\b(as|case|of|class|data|default|deriving|do|forall|hiding|if|then|else|import|infix|infixl|infixr|instance|let|in|module|newtype|qualified|type|where')\b/
	},
	mainlibs : {
		exp  : /\b(Foreign|Numeric|Prelude)\b/
	},
	preludefuncs : {
		exp  : /\b(not|otherwise|maybe|either|fst|snd|curry|uncurry|compare|max|min|succ|pred|toEnum|fromEnum|enumFrom|enumFromThen|enumFromTo|enumFromThenTo|minBound|maxBound|negate|abs|signum|fromInteger|toRational|quot|rem|div|mod|quotRem|divMod|toInteger|recip|fromRational|pi|exp|log|sqrt|logBase|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|asinh|acosh|atanh|properFraction|truncate|round|ceiling|floor|floatRadix|floatDigits|floatRange|decodeFloat|encodeFloat|exponent|significand|scaleFloat|isNaN|isInfinite|isDenomalized|isNegativeZero|isIEEE|atan2|subtract|even|odd|gcd|lcm|fromIntegral|realToFrac|return|fail|fmap|mapM|mapM_|sequence|sequence_|id|const|flip|until|asTypeOf|error|undefined|seq|map|filter|head|last|tail|init|null|length|reverse|foldl|foldl1|foldr|foldr1|and|or|any|all|sum|product|concat|concatMap|maximum|minimum|scanl|scanl1|scanr|scanr1|iterate|repeat|cycle|take|drop|splitAt|teakWhile|dropWhile|span|break|elem|notElem|lookup|zip|zip3|zipWith|zipWith3|unzip|unzip3|unzip|unzip3|lines|words|unlines|unwords|showPrec|show|showList|shows|showChar|showString|showParen|readsPrec|readList|reads|readParen|read|lex|putChar|putStr|putStrLn|print|getChar|getLine|getContents|interact|readFile|writeFile|appendFile|readIO|readLn|ioError|userError|catch)\b/
	},
	preludetypes : {
		exp  : /\b(Bool|Maybe|Either|Ord|Ordering|Char|String|Eq|Enum|Bounded|Int|Integer|Float|Double|Rational|Num|Real|Integral|Fractional|Floating|RealFrac|RealFloat|Monad|Functor|Show|ShowS|Read|ReadS|IO)\b/
	},
	preludeexceptions : {
		exp  : /\b(IOError|IOException)\b/
	},
	symbols	: {
		exp  : /\||-&gt;|&lt;-|@|!|::|_|~|=|&&|\|\||==|\/=|&lt;|&lt;=|&gt;|&gt;=|\+|-|\*|\/|\*\*|^|^^|&gt;&gt;=|&gt;&gt;|=&lt;&lt;|\$|\.|\$!|\+\+|!!/
	}
});
