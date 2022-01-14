const { contextBridge, ipcRenderer } = require("electron")
const fs = require("fs")

const { toHTML } = require("./assets/js/markdown-to-html")
const { makePDF } = require("./assets/js/html-to-pdf")

/*
const { contextBridge, ipcRenderer } = require("electron")
const { <js-function-name> } = require(<js-path>)

contextBridge.exposeInMainWorld(<api-name>, {
  <property-name1>: async (<args>) => await ipcRenderer.invoke(<cannel>, <args>),
  <property-name2>: <js-function-name>,
});
*/

contextBridge.exposeInMainWorld("textApi", {
  docText: async (text) => await ipcRenderer.invoke("docText", text),
  htmlText: toHTML,
  write: fs.writeFile,
  makePDFFile: makePDF,
});
