export const coinRankView = (data, options) => {
  const view = {
    initView() {
      data.forEach(el => {
        const tr = document.createElement('tr')

        const dataArr = [
          el.rank,
          el.name,
          el.symbol,
          el.price,
          el.percent_change_7d
        ]

        dataArr.forEach((v, i) => {
          const th = document.createElement('th')
          th.innerHTML = v
          if (i === 4) {
            th.className = 'percentChange'
          }
          tr.appendChild(th)
          options.tBody.appendChild(tr)
        })
      })
    },

    setPriceVariationColor() {
      const percentChangeArr = [...document.querySelectorAll('.percentChange')]
      percentChangeArr.forEach(el => {
        if (el.innerHTML > 0) {
          el.style.color = 'blue'
        } else {
          el.style.color = 'red'
        }
      })
    }
  }

  return view
}
