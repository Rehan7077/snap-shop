const puppeteer = require("puppeteer");
async function scrapeFlipkartList(searchTerm) {
  const browser = await puppeteer.launch({ headless: "new"});
  const page = await browser.newPage();

  await page.goto(`https://www.flipkart.com/search?q=${searchTerm}`);
  await page.waitForSelector(".lvJbLV");

  const products = await page.evaluate(()=>{
    const items = document.querySelectorAll(".lvJbLV")
    return [...items]
      .map((item) => ({
        title: item.querySelector(".RG5Slk")?.innerText,
        price: item.querySelector(".hZ3P6w")?.innerText,
        rating: item.querySelector(".MKiFS6")?.innerText,
        url: item.querySelector(".k7wcnx")?.href,
        image: item.querySelector(".lWX0_T img")?.src,
      }))
      .filter((p) => p.title);
  })
  await browser.close()
  return products
  
}
// scrapeFlipkartList('iphone').then(console.log)