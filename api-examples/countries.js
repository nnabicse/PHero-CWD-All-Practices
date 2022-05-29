const loadCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayCountries(data))
}

// loadCountries()

const displayCountries = (data) =>{
    // for(const country of countries){
    console.log(data);

    // }

    const countriesContainer = document.getElementById("countries");
    data.forEach(country => {
        const h3 = document.createElement("h3");
        const div = document.createElement("div");
        div.classList.add("country");

        div.innerHTML = `
        <h3>Country: ${country.name.official}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.official}')">Details</button> 
        `


        // h3.innerText=country.name.official;
        // div.appendChild(h3);
        // const p = document.createElement("p");
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesContainer.appendChild(div);

    });
    
} 

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url).then(response => response.json()).then(data => displayCountryDetails(data[0])); 
}

const displayCountryDetails = (country) =>{
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
        <h4>Name: ${country.name.official}</h4>
        <p>Population: ${country.population}</p>
        <img width = "50px" src = "${country.flags.png}">
    `
    

}