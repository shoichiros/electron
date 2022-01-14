const puppeteer = require("puppeteer-core")

const makePDF = async (textData, fileName) => {
  const options = {
    channel: "chrome"
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setContent(textData);

  await page.pdf({
    path: `${fileName}.pdf`,
  });

  await browser.close();
};

module.exports = { makePDF };
