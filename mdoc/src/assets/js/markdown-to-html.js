const md = require("markdown-it")({
  preset: "default",
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
})

/* Markdown to HTML */
const toHTML = (markdownText) => {
  const html = md.render(markdownText);
  return html;
};

module.exports = { toHTML };
