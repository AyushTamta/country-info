
const countriesList = document.getElementById("countries");
let countries;
countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}


fetch(" https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));



function initialize(countriesData) {
  countries = countriesData;
  let options = "";
 

  countries.forEach(country => options+=`<option value="${country.alpha}">${country.name}</option>`);

  countriesList.innerHTML = options;

  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlphaCode) {
  const countryData = countries.find(country => country.alpha === countryByAlphaCode);


  
 // document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt =`Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("dialing-code").innerHTML =`+${countryData.callingCodes[0]}`;
  document.getElementById("currencies").innerHTML= countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML =countryData.subregion;
}






