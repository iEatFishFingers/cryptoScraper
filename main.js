const API_KEY = "";
// Include this at the top of your script file
/**
 * @OnlyCurrentDoc
 * @scope https://www.googleapis.com/auth/spreadsheets
 * @scope https://www.googleapis.com/auth/drive.file
 */

function getCryptoPrice(symbol) {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`;
  const headers = {
    "X-CMC_PRO_API_KEY": API_KEY,
    "Accept": "application/json"
  };
  const options = {
    method: "get",
    headers: headers
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    const price = json.data[symbol].quote.USD.price; // Extract USD price
    return price;
  } catch (e) {
    Logger.log(`Error fetching data for ${symbol}: ${e.message}`);
    return null;
  }
}

function testGetCryptoPrice() {
  const symbol = "XRP"; // Replace with any crypto symbol (e.g., BTC, ETH)
  const price = getCryptoPrice(symbol);
  Logger.log(`The price of ${symbol} is $${price}`);
}

function CRYPTO(symbol) {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}`;
  const headers = {
    "X-CMC_PRO_API_KEY": API_KEY,
    "Accept": "application/json"
  };
  const options = {
    method: "get",
    headers: headers
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());
    const price = json.data[symbol.toUpperCase()].quote.USD.price; // Get USD price
    return price; // Return price to the sheet
  } catch (e) {
    return `Error: ${e.message}`; // Show an error message in the cell
  }
}

