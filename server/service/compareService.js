const amazonScraper = require("../scraper/amazon/amazon");
const flipkartScraper = require("../scraper/flipkart/flipkart");

async function compareService(product) {
  const [amazonData, flipkartData] = await Promise.all([
    amazonScraper(product),
    flipkartScraper(product),
  ]);
 
  return { amazon: amazonData, flipkart: flipkartData };
}

module.exports = compareService; 
