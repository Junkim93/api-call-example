const API_URL = 'https://api.coinpaprika.com/v1/tickers'
const coinInfo = []
let rawData = []

fetch(API_URL)
  .then(res => {
    return res.json()
  })
  .then(data => {
    rawData = data.map(el => {
      return {
        id: el.id,
        name: el.name,
        symbol: el.symbol,
        rank: el.rank,
        price: el.quotes.USD.price,
        percent_change_7d: el.quotes.USD.percent_change_7d
      }
    })
  })
  .catch(err => {
    throw Error(err)
  })
