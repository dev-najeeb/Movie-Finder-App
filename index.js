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
const genreBtns = document.querySelectorAll(".genreBtn");
const Allbtn = document.getElementById("All");
const AllMoviesSection = document.querySelector(".allMovies");
const popularBtn = document.querySelector("#Popular");
let data;
let firstFourMovies;
let poster_path;
let imgUrl;
let overView;
let result;
let MovieData;
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
    console.log(data);
    showResults();
    result = data.results;
    if (result.length === 0) {
      popularMoviesText.innerText = "Coudld not find it , Check spelling.";
    }
  } catch (error) {
    console.log(error);
  }
}
function showResults() {
  popularMovies.classList.add("hidden");
  AllMoviesSection.classList.add("hidden");
  searchResult.classList.remove("hidden");
  searchResult.classList.add("flexContainer");
  popularMoviesText.innerText = "Search Results";
  popularMoviesText.classList.add("marginleft");
  const noimg = "assets/no image.jpg";
  firstFourMovies = data.results.slice(0, 5);
  searchResult.innerHTML = firstFourMovies
    .map((movie) => {
      if (movie.poster_path) {
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
    .join("");
}
searchBtn.addEventListener("click", () => {
  getObject();
});

async function DisoverMovies() {
  try {
    const getObject = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    );
    if (!getObject.ok) {
      throw new Error(`HTTP error! Status: ${getObject.status}`);
    }
    MovieData = await getObject.json();
    showAllMovies();
    console.log(MovieData);
  } catch (error) {
    console.log(error);
  }
}
function showAllMovies() {
  popularMovies.classList.add("hidden");
  searchResult.classList.add("hidden");
  AllMoviesSection.classList.remove("hidden");
  popularMoviesText.innerText = "All";
  popularMoviesText.style.marginLeft = "20px";
  popularMoviesText.style.fontSize = "30px";
  popularMoviesText.style.fontWeight = "400";
  allMovies = MovieData.results.slice(0, 18);
  AllMoviesSection.innerHTML = allMovies
    .map((movie) => {
      console.log(movie.title);
      console.log(movie.genre_ids);
      if (movie.poster_path) {
        posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
      } else {
        posterUrl = noimg;
      }
      return `
<article class="msBoxes"> 
<img id="msPoster" src="${posterUrl}" alt="">
<h3 id="h3Title">${movie.title}</h3>
  <span id="RD">${movie.release_date}</span>
</article> 
  `;
    })
    .join("");
}
Allbtn.addEventListener("click", () => {
  DisoverMovies();
});
// genreBtns.forEach((btn) => {
// })
popularBtn.addEventListener("click", () => {
  AllMoviesSection.classList.add("hidden");
  popularMoviesText.innerText = "Popular Movies";
  popularMoviesText.style.marginLeft = "0px";
  popularMoviesText.style.fontSize = "20px";
  if (popularMovies.classList.contains("hidden")) {
    popularMovies.classList.remove("hidden");
  } else if (searchResult.classList.contains("visible")) {
    searchResult.classList.add("hidden");
  }
});
