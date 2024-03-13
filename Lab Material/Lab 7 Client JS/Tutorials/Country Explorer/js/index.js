// get the reference of the elements you want to interact with
const regionDD = document.querySelector("#region")
const countryDD = document.querySelector("#country")
const factsArea = document.querySelector("#facts-area")

const baseRegionURL = 'https://restcountries.com/v3.1/region/'
const baseCountryURL = 'https://restcountries.com/v3.1/name/'

// register a listener
regionDD.addEventListener('change', handleRegionChange)
countryDD.addEventListener('change', handleCountryChange)

async function handleRegionChange() {
    // we want to create the proper URL
    const url = `${baseRegionURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries
        .map(country => `<option value='${country.name.common}'>${country.name.common}</option>`)


}

async function handleCountryChange() {
    const url = `${baseCountryURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()


    // display the content inside the facts area div

    factsArea.innerHTML = countries.map(country => countryToFactsHTML(country)).join('<br>')
}

function countryToFactsHTML(country) {
    const currKeys = Object.keys(country.currencies)
    const currencies = currKeys.map(key => country.currencies[key].name)
    return `
        <h2>${country.name.official}</h2>
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        <table>
            <tr>
                <th>Official Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${Object.values(country.languages)}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${currencies}</td>
            </tr>
        
        </table>
`

}