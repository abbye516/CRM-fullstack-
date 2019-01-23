class AnalyticsCalc{
    getSoldCountries (data) {
        let countries = {}
        for (let d of data) {
            if (countries[d.country] && d.sold) {
                countries[d.country]++
            }
            else if (d.sold) {
                countries[d.country] = 1
            }
        }
        return countries
    }
    hotCountry (data) {
        let soldCountries = this.getSoldCountries(data)
        let arr = Object.keys(soldCountries)
        let max = 0
        let hottestCountry
        arr.forEach(k => {
            if (soldCountries[k] > max) {
                hottestCountry = k
                max = soldCountries[k]
            }
        }
        )
        return {hottestCountry: hottestCountry, count: max}
    }
}

let analyticsCalc = new AnalyticsCalc()

module.exports = analyticsCalc
