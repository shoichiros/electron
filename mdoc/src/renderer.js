const docArea = document.getElementById("documentArea");

/* Markdown to HTML */
const conversionHTMLText = (documentText) => {
  const html = window.textApi.htmlText(documentText);
  return html;
};

/* HTML button click */
const htmlButton = document.getElementById("exportHTML");

htmlButton.addEventListener("click", async () => {
  const htmlText = conversionHTMLText(docArea.value);

  await window.textApi.write("document.html", htmlText, (error) => {
    if (error) throw error;
    alert("Successfully exported HTML file!!");
  });
});

/* PDF button click*/
const pdfButton = document.getElementById("exportPDF");

pdfButton.addEventListener("click", async () => {
  const loading = document.getElementById("loading");
  const htmlText = conversionHTMLText(docArea.value);
  const fileName = "document";

  /* HTML loading display. Because PDF processing takes time */
  loading.style.display = "flex";
  await window.textApi.makePDFFile(htmlText, fileName);
  alert("Successfully exported PDF file!!");
  loading.style.display = "none";
});

/* Markdown button click */
const markdownButton = document.getElementById("exportMarkdown");

markdownButton.addEventListener("click", async () => {
  await window.textApi.write("document.md", docArea.value, (error) => {
    if (error) throw error;
    alert("Successfully exported Markdown file!!");
  });
});
