export class WeatherDataProcessor {
    #cityGeocodes;
    constructor() {
        this.#cityGeocodes = [{city: "Rehovot", latitude: 31.046, longitude: 34.851}];
    }
    getData(requestObject) {
        // {city, dateFrom, dateTo, hoursFrom, hoursTo}
        const url = this.getURL(requestObject);
        const promiseResponse = fetch(url);
        return this.processData(promiseResponse.then(response => response.json()));

    }
    getURL(requestObject) {
        const baseUrl = "https://api.open-meteo.com/v1/gfs?";
        const baseParams = "&hourly=temperature_2m&timezone=IST&";
        const citiesList = this.#cityGeocodes.filter(e => requestObject.city == e.city);
        console.log(citiesList);
        const startDate = "2022-12-18";
        const endDate = "2022-12-20";
        return citiesList.map(e => `${baseUrl}latitude=${e.latitude}
        &longitude=${e.longitude}${baseParams}start_date=${startDate}&end_date=${endDate}`)
    }

    processData(promiseData) {
        console.log(promiseData);
        // return promiseData(data => {
        //     // return {city, objects: [{date, hour, temperature},...]}
        // })
    }
}