pageLoader();

function pageLoader(){
    const findCountryForm = document.querySelector('#country-info-form')
    findCountryForm.addEventListener('submit', findCountries)
}

function findCountries(event){
    event.preventDefault()

    const countryName = document.getElementsByName('country')[0].value;
    const url = `https://restcountries.com/v3.1/name/${countryName}`

    fetch(url)
        .then(response => response.json())
        .then(data => displayCard(data))
        .catch(err => console.error(err))
}

function displayCard(data){

    for (let country of data){
        
        // create variable for the place in html that my card will be made in
        let card = document.getElementById('country-card')
    
    
        // Create first layer div with class name "card"
        const div = document.createElement('div')
        card.append(div)
        // Add class to div
        div.classList.add('card')
    
        // Add Image to Card
        div.innerHTML = `<img src="${country.flags.png}" class="card-img-top" alt="...">`
    
        // Add Inner Div with class "card-body" and the rest of the information
        const innerDiv = document.createElement('div')
        div.append(innerDiv)
        innerDiv.classList.add('card-body')
        innerDiv.innerHTML = `<h5 class="card-title">${country.name.official}</h5>`

        const innerDiv2 = document.createElement('div')
        div.append(innerDiv2)
        innerDiv2.innerHTML = `<p class="card-text">${country.currencies.NGN.name}</p>`

        innerDiv.innerHTML = `<p class="card-text">${country.capital['0']}</p>`
        
        innerDiv.innerHTML = `<p class="card-text">${country.languages}</p>`

    }




    
}