const amazonScraper = require("../scraper/amazon");
const flipkartScraper = require("../scraper/flipkart ");

async function compareService(product) {
  const [amazonData, flipkartData] = await Promise.all([
    amazonScraper(product),
    flipkartScraper(product),
  ]);
  return { amazon: amazonData, flipkart: flipkartData };
}
module.exports = compareService;
