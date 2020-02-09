
// 1) Convert the function below to an arrow function:

function(a, b) {
    return a - b;
}


const total = (a, b) => a - b;



// 2) Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name.
In the catch method of your code, redirect to error.html if there is an error.
https://api.rawg.io/api/games?genres=sports



const baseUrl = "https://api.rawg.io/api/games?genres=sports";
const gamesUrl = baseUrl + "games";
fetch(gamesUrl)
    .then(function(response) {
        console.log(response);
    });
    fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.dir(error);
    });
    function loadGames(json) {
        console.dir(json);
    }
    function loadGames(json) {

        console.dir(json);
        const games = json.results;
    }




// 3)  Replace the word cats with the word giraffes in the following sentence: 


const genreHeading = document.querySelector("h1");

genreHeading.innerText = genres;

const formattedGenres = genres.replace ("cats", "giraffes");

genreHeading.innerText = formattedGenres;



// 4) Given the URL below, write code that checks if there is a userId parameter in the query string.
If there is no userID parameter, redirect the browser to third.html.
If there is a userID parameter and its value is less than 10, redirect to first.html.
If there is a userID parameter and its value is 10 or greater, redirect to second.html.
https://my.site.com?userId=7




const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "https://my.site.com?userId=7";
}




// 5) Write code that removes the button, and only the button, from its parent element in the HTML below:
<div class="container">
    <p>Lorem ipsum dolor</p>
    <button class="btn">Click me</button>
</div>




const container = document.querySelector(".container");
        const button = document.querySelector(".btn");
        container.removeChild(button);
    






// 6) Create an li element with a text value of Parrots and a class of parrots.
Add the new item as the second item in the ul below (add it after Cows).
<ul class="animals">
    <li class="cows">Cows</li>
    <li class="elephants">Elephants</li>
</ul>





const oldList = document.querySelector("ul");
const list = document.createElement("li");  
list.className = "Parrots";
const newItem = document.createTextNode("Parrots");
oldList.appendChild(newItem);
console.log(oldList);
list.appendChild(newItem);
console.log(list);
oldList.appendChild(list);
console.log(oldList);




