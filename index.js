const API_KEY = "6c03d5b5d37483a4e164a2aa1c438cec";
const searchBar = document.getElementById("searchBox");
const searchBtn = document.getElementById("Search");
const resultBox = document.getElementById("resultBox");
const resultPoster = document.getElementById("resultBoxPoster");
const resultSpan = document.getElementById("resultBoxSpan");
const resultRD = document.getElementById("resultReleaseDate");
const searchResult = document.querySelector("#searchMovies");
const popularMovies = document.querySelector("#popularMovies");
const MoviesText = document.querySelector("#MT");
const spellingCheck = document.querySelector("#spellingCheck");
const genreBtns = document.querySelectorAll(".genreBtn");
const AllMoviesSection = document.querySelector("#allMovies");
const allBtn = document.getElementById("All");
const popularBtn = document.querySelector("#Popular");
const actionBtn = document.querySelector("#Action");
const adventureBtn = document.querySelector("#Adventure");
const animationBtn = document.querySelector("#Animation");
const comedyBtn = document.querySelector("#Comedy");
const crimeBtn = document.querySelector("#Crime");
const dramaBtn = document.querySelector("#Drama");
const horrorBtn = document.querySelector("#Horror");
const romanceBtn = document.querySelector("#Romance");
const scifiBtn = document.querySelector("#Sci-fi");
const thrillerBtn = document.querySelector("#Thriller");
const actionMovieSection = document.querySelector("#actionMovies");
const adventureMovieSection = document.querySelector("#adventureMovies");
const animationMovieSection = document.querySelector("#animationMovies");
const comedyMovieSection = document.querySelector("#comedyMovies");
const crimeMovieSection = document.querySelector("#crimeMovies");
const dramaMovieSection = document.querySelector("#dramaMovies");
const horrorMovieSection = document.querySelector("#horrorMovies");
const romanceMovieSection = document.querySelector("#romanceMovies");
const scifiMovieSection = document.querySelector("#sci-fiMovies");
const thrillerMovieSection = document.querySelector("#thrillerMovies");
const genreSection = document.querySelectorAll(".genreSection");
const genreBtn = document.querySelectorAll(".genreBtn");
let data;
let firstFourMovies;
let poster_path;
let imgUrl;
let overView;
let result;
let MovieData;
let allMovies;
let actionMovies;

async function fetchMovies(apiurl, amountofArray) {
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    const movies = data.results.slice(0, amountofArray);
    return movies;
  } catch (error) {
    console.log(error);
    return [];
  }
}
function buildMovieHTML(movies) {
  const noimg = "assets/no image.jpg";
  return movies
    .map((movie) => {
      let posterUrl;
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
genreBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    genreSection.forEach((section) => {
      section.classList.add("hidden");
      section.classList.remove("gridActivate")
    });
    const section = document.getElementById(e.target.id.toLowerCase() + "Movies");
    console.log(section)
    section.classList.add("gridActivate");
    section.classList.remove("hidden");
  });
});

async function getObject() {
  const userSearch = searchBar.value;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userSearch}`;
  firstFourMovies = await fetchMovies(apiUrl, 6);
  showResults();
  if (firstFourMovies.length === 0) {
    MoviesText.innerText = "Could not find it, Check spelling.";
  }
}
function showResults() {
  searchResult.classList.add("flexContainer");
  MoviesText.innerText = "Search Results";
  searchResult.innerHTML = buildMovieHTML(firstFourMovies);
}
searchBtn.addEventListener("click", () => {
  getObject();
});
async function DisoverMovies() {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  allMovies = await fetchMovies(apiUrl, 18);
  showAllMovies();
}
function showAllMovies() {
  MoviesText.innerText = "All";
  MoviesText.style.marginLeft = "20px";
  MoviesText.style.fontSize = "30px";
  MoviesText.style.fontWeight = "400";
  AllMoviesSection.innerHTML = buildMovieHTML(allMovies);
}
allBtn.addEventListener("click", () => {
  DisoverMovies();
});
popularBtn.addEventListener("click", () => {
  MoviesText.innerText = "Popular Movies";
  MoviesText.style.marginLeft = "0px";
  MoviesText.style.fontSize = "20px";
  if (popularMovies.classList.contains("hidden")) {
    popularMovies.classList.remove("hidden");
  } else if (searchResult.classList.contains("visible")) {
    searchResult.classList.add("hidden");
  }
});
async function showMovies(genreId, element) {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
  let Movies = await fetchMovies(apiUrl, 18);
  element.innerHTML = buildMovieHTML(Movies);
}
actionBtn.addEventListener("click", () => {
  MoviesText.innerText = "Action Movies"
  showMovies(28, actionMovieSection);
});
adventureBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Adventure Movies"
  showMovies(12,adventureMovieSection)
})
animationBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Animated Movies"
  showMovies(16,animationMovieSection)
})
horrorBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Horror Movies"
  showMovies(27,horrorMovieSection)
})
crimeBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Crime Movies"
  showMovies(80,crimeMovieSection)
})
comedyBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Comedy Movies"
  showMovies(35,comedyMovieSection)
})
dramaBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Drama Movies"
  showMovies(18,dramaMovieSection)
})
thrillerBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Thriller Movies"
  showMovies(53,thrillerMovieSection)
})
romanceBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Romance Movies"
  showMovies(10749,romanceMovieSection)
})
scifiBtn.addEventListener("click",()=>{
  MoviesText.innerText = "Science Fiction Movies"
  showMovies(878 , scifiMovieSection)
})