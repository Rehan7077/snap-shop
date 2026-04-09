const puppeteer = require("puppeteer");

async function scrapeAmazonList(searchTerm) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(`https://www.amazon.in/s?k=${searchTerm}`);
  await page.waitForSelector(".s-result-item");

  const products = await page.evaluate(() => {
    const items = document.querySelectorAll(".s-result-item[data-asin]");
    return [...items].slice(0, 15)
      .map((item) => ({
        title: item.querySelector("a h2 span")?.innerText,
        price: item.querySelector(".a-price-whole")?.innerText,
        rating: item.querySelector(".a-icon-alt")?.innerText,
        url: item.querySelector("a")?.href,
        image: item.querySelector(".s-image")?.src,
      }))
      .filter((p) => p.title);
  });
  await browser.close();
  return products;
}
module.exports = scrapeAmazonList;
