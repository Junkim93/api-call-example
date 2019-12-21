export const dataService = () => {
  const API_URL = 'https://api.coinpaprika.com/v1/tickers'

  return {
    sortOutData(data) {
      const sortedData = data
        .sort((a, b) => {
          return a.rank - b.rank
        })
        .slice(0, 100)
        .map(el => {
          return {
            name: el.name,
            symbol: el.symbol,
            rank: el.rank,
            price: `$${el.quotes.USD.price.toFixed(2)}`,
            percent_change_7d: el.quotes.USD.percent_change_7d
          }
        })

      return sortedData
    },

    async serveSortedData() {
      const response = await fetch(API_URL)
      const data = await response.json()
      const sortedData = await this.sortOutData(data)
      return await sortedData
    }
  }
}
