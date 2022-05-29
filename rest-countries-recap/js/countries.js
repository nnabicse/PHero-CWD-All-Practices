const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res =>res.json())
    .then(data => displayCountries(data))
}


const displayCountries = countries =>{
    console.log(countries)
    const allCountiresHTML = countries.map(country => getCountryHTML(country));

    const container = document.getElementById("countries");
    container.innerHTML = allCountiresHTML.join(" ");

    // console.log(allCountiresHTML[0]);
}

const getCountryHTML = (country) =>{
    const {name, flags} = country
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    
    `
}

loadCountries()


