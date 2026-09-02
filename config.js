const API_KEY = "6c03d5b5d37483a4e164a2aa1c438cec";

const searchBar = document.getElementById("searchBox");
const searchBtn = document.getElementById("Search");
const searchResult = document.querySelector("#searchMovies");

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
const genreBtn = document.querySelectorAll(".genreBtn");
const overviewBtn = document.querySelectorAll(".showOverview") 

const popularMovies = document.querySelector("#popularMovies");
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