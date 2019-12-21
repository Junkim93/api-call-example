import { dataService } from './dataService.js'
import { coinRankView } from './coinRankView.js'
;(() => {
  const options = {
    tBody: document.querySelector('.tableBody')
  }

  const ds = dataService()

  ds.serveSortedData().then(data => {
    const view = coinRankView(data, options)
    view.initView()
    view.setPriceVariationColor()
  })
})()
