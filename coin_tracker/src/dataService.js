export const dataService = () => {
  const API_URL = 'https://api.coinpaprika.com/v1/tickers'
  const coinInfo = []

  return {
    getCoinData() {
      const rawData = []

      fetch(API_URL)
        .then(res => {
          rawData = [...res.json()]
        })
        .catch(err => {
          throw Error(err)
        })

      return rawData
    }
  }
}
