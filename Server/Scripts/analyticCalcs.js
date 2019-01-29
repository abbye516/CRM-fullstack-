class AnalyticsCalc {
    getSoldCountries(data) {
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
    hotCountry(data) {
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
        return { hottestCountry: hottestCountry, count: max }
    }
    emailsSent(data){
        let emailArray = data.filter(f => f.emailType && f.emailType !== null)    
        let emailCount = emailArray.map(f => f.emailType).length
        return emailCount
    }
    outstandingClients(data){
        let clientArray = data.filter(f=>f.sold !== true)
                                .map(f=> f.sold)
        let outstandingClientsTotal = clientArray.length        
        return outstandingClientsTotal
    }
    topEmployeesChart(data){
        let relevantEmployees = data.filter(f=>f.sold)
                                    .map(m=> m.owner)
    console.log(relevantEmployees)
    }
}

let analyticsCalc = new AnalyticsCalc()

module.exports = analyticsCalc
