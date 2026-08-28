const API_KEY = "6c03d5b5d37483a4e164a2aa1c438cec";
const searchBar = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const resultBox = document.getElementById("resultBox");
const resultPoster = document.getElementById("resultBoxPoster");
const resultSpan = document.getElementById("resultBoxSpan");
const resultRD = document.getElementById("resultReleaseDate");
const searchResult = document.querySelector(".searchResults");
const popularMovies = document.querySelector(".popularMovies");
const popularMoviesText = document.querySelector("#PM");
const spellingCheck = document.querySelector("#spellingCheck");
let data;
let firstFourMovies;
let poster_path;
let imgUrl;
let overView;
let result;
async function getObject() {
  const userSearch = searchBar.value;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userSearch}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data = await response.json();
    console.log(data)
    showResults();
    result = data.results;
    if(result.length === 0) {
      
     popularMoviesText.innerText = "Coudld not find it , Check spelling."
    }
  } catch (error) {
    console.log(error);
  }
}
function showResults() {
  popularMovies.classList.add("hidden");
  searchResult.classList.add("flexContainer");
  popularMoviesText.innerText = "Search Results"
  popularMoviesText.classList.add("marginleft")
  const noimg = "assets/no image.jpg"
  firstFourMovies = data.results.slice(0, 5);
  searchResult.innerHTML = firstFourMovies.map((movie) => {
    if(movie.poster_path){
     posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; 
    } else {
      posterUrl = noimg;
    }
    return `
<article class="searchResultArticle"> 
<img id="resultPoster" src="${posterUrl}" alt="">
<h3 id="h3Title">${movie.title}</h3>
<p class="overview">${movie.overview}</p>
  <span id="RD">${movie.release_date}</span>
</article> 
  `;
})
  .join("")
}

searchBtn.addEventListener("click", () => {
  getObject();
});
