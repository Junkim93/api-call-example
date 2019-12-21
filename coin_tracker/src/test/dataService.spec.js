const dataService = require('../dataService')

describe('dataService의', () => {
  let ds
  beforeEach(() => (ds = dataService()))

  describe('ds.sortOutDataRank는', () => {
    it('랭크가 높은순으로 데이터를 정렬한다.', () => {
      const stubArr = [{ rank: 2 }, { rank: 3 }, { rank: 1 }]
      const expected = [{ rank: 1 }, { rank: 2 }, { rank: 3 }]

      ds.sortOutDataRank(stubArr)
      expect(stubArr).toStrictEqual(expected)
    })
  })

  describe('ds.')
})
