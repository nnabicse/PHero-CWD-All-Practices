const searchFood = () =>{
    const searchField =  document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = "";


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    fetch(url).then(response => response.json()).then(data => displaySearchResult(data.meals));

}


const displaySearchResult = (meals) =>{
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = "";
    searchResult.textContent = "";

    // if(meals.length == 0){
    //     searchResult.innerHTML = ""
    // }
    
    for(const meal of meals){
        // console.log(meal);

        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div onclick="details(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
      </div>
        `

        searchResult.appendChild(div);
    }
}

const details = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url).then(response => response.json()).then(data => displayMealDetails(data.meals[0]));

}


const displayMealDetails = (meal) =>{
    const details = document.getElementById("search-result");
    const div = document.createElement("div");
        div.classList.add("card-body");
        
        div.innerHTML = `
            <div>
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
            <img src="${meal.strMealThumb}" class="card-img-bottom" ></img>
        `;
        details.appendChild(div);
    console.log(meal);
}