// get the reference of the elements you want to interact with
const regionDD = document.querySelector("#region")
const countryDD = document.querySelector("#country")

const baseRegionURL = 'https://restcountries.com/v3.1/region/'

// register a listener
regionDD.addEventListener('change', handleCountryChange)

async function handleCountryChange() {
    // we want to create the proper URL
    const url = `${baseRegionURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries
        .map(country => `<option value='${country.name.common}'>${country.name.common}</option>`)


}