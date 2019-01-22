
let data = [
    {
        "_id": "5b9f48a2406b2cd74c55c663",
        "name": "Perkins Cunningham",
        "email": "perkinscunningham@imant.com",
        "firstContact": "2018-11-26T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a25afcc00e1c1ddfbf",
        "name": "Fischer Hammond",
        "email": "fischerhammond@imant.com",
        "firstContact": "2017-05-15T21:00:00.000Z",
        "emailType": null,
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Turkey"
    },
    {
        "_id": "5b9f48a2717f46c7647d2792",
        "name": "Gonzalez Armstrong",
        "email": "gonzalezarmstrong@imant.com",
        "firstContact": "2018-04-05T21:00:00.000Z",
        "emailType": null,
        "sold": true,
        "owner": "Leila Howe",
        "country": "France"
    },
    {
        "_id": "5b9f48a2fbb66b93bce1c091",
        "name": "Melva Ingram",
        "email": "melvaingram@imant.com",
        "firstContact": "2018-09-23T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Romania"
    },
    {
        "_id": "5b9f48a2fbb66b93bce1c091",
        "name": "Melva Ingram",
        "email": "melvaingram@imant.com",
        "firstContact": "2018-09-23T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Romania"
    }
]

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
