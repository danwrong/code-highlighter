CodeHighlighter.addStyle("diff", {
  add: {
      exp : /(\n|^)([+].*)(?=\n|$)/
  },
  remove: {
      exp : /(\n|^)([-].*)(?=\n|$)/
  },
  line_number: {
      exp : /(\n|^)(@@.*)(?=\n|$)/
  },
  file: {
      exp : /(\n|^)([:]{3}.*)(?=\n|$)/
  },
});