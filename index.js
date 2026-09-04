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
    .map((movie, index) => {
      let posterUrl;
      if (movie.poster_path) {
        posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
      } else {
        posterUrl = noimg;
      }
      return `
      <div class="box" style="--delay: ${index}"> 
      <button class="backIcon" type="button" aria-label="Back"><img src="assets/back arrow.svg" alt=""></button>
      <img class="boxImg" src="${posterUrl}" alt="">
      <p class="movieOverview">${movie.overview}</p>
      <h3 id="h3Title">${movie.title}</h3>
      <span class="RD">${movie.release_date}</span>
         <button class="showOverview">show overview</button>
      </div> 
  `;
    })
    .join("");
}
genreBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    genreSection.forEach((sec) => {
      sec.classList.add("hidden");
      sec.classList.remove("gridActivate");
    });
    const section = document.getElementById(
      e.target.id.toLowerCase() + "Movies",
    );
    closeAllMovieBoxes(section)
    console.log(section);
    if(section){
      section.classList.add("gridActivate");
      section.classList.remove("hidden");
    }
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
  AllMoviesSection.innerHTML = buildMovieHTML(allMovies);
}
allBtn.addEventListener("click", () => {
  DisoverMovies();
});
popularBtn.addEventListener("click", () => {
  MoviesText.innerText = "Popular Movies";
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
  MoviesText.innerText = "Action Movies";
  showMovies(28, actionMovieSection);
});
adventureBtn.addEventListener("click", () => {
  MoviesText.innerText = "Adventure Movies";
  showMovies(12, adventureMovieSection);
});
animationBtn.addEventListener("click", () => {
  MoviesText.innerText = "Animated Movies";
  showMovies(16, animationMovieSection);
});
horrorBtn.addEventListener("click", () => {
  MoviesText.innerText = "Horror Movies";
  showMovies(27, horrorMovieSection);
});
crimeBtn.addEventListener("click", () => {
  MoviesText.innerText = "Crime Movies";
  showMovies(80, crimeMovieSection);
});
comedyBtn.addEventListener("click", () => {
  MoviesText.innerText = "Comedy Movies";
  showMovies(35, comedyMovieSection);
});
dramaBtn.addEventListener("click", () => {
  MoviesText.innerText = "Drama Movies";
  showMovies(18, dramaMovieSection);
});
thrillerBtn.addEventListener("click", () => {
  MoviesText.innerText = "Thriller Movies";
  showMovies(53, thrillerMovieSection);
});
romanceBtn.addEventListener("click", () => {
  MoviesText.innerText = "Romance Movies";
  showMovies(10749, romanceMovieSection);
});
scifiBtn.addEventListener("click", () => {
  MoviesText.innerText = "Science Fiction Movies";
  showMovies(878, scifiMovieSection);
});
allSection.forEach((section) => {
  section.addEventListener("click", (event) => {
    console.log(event)
    const sectionBtn = event.target.closest("button");
    if (sectionBtn) {
      const SelectedSection = sectionBtn.closest(".genreSection");
      if(!SelectedSection) return;
      const boxes = SelectedSection.querySelectorAll(".box");
      const clickedbtnBox = sectionBtn.closest(".box");
   
      console.log(boxes);
     const backIcon = clickedbtnBox.querySelector(".backIcon")
      console.log(clickedbtnBox);
      boxes.forEach((box)=>{
        box.classList.add("hidden")
        box.classList.remove("visible")
      })
      clickedbtnBox.classList.remove("hidden");
  
      setBox(clickedbtnBox);
      backIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("button was clicked");
        resetBox(clickedbtnBox);
        console.log("icon was clicked");
        boxes.forEach((box) => {
          box.classList.add("visible")
          box.classList.remove("hidden")
        })
      });
    }
  });
});
function setBox(box) {
  if(!box) return;
  box.classList.add("clickedBox", "flexContainer");
  box.querySelector(".boxImg").classList.add("clickedboxImg");
  box.querySelector(".RD").classList.add("clickedBoxRD");
  box.querySelector("#h3Title").classList.add("clickedBoxHeading");
  box.querySelector(".movieOverview").classList.add("visible", "Overview");
  box.querySelector(".showOverview").classList.add("hidden");
  box.querySelector(".backIcon").classList.add("visible");
}
function resetBox(box) {
  if(!box) return;
  box.classList.remove("clickedBox","hidden","flexContainer");
  box.querySelector(".boxImg").classList.remove("clickedboxImg");
  box.querySelector(".RD").classList.remove("clickedBoxRD");
  box.querySelector("#h3Title").classList.remove("clickedBoxHeading");
  box.querySelector(".movieOverview").classList.remove("visible", "Overview");
  box.querySelector(".showOverview").classList.remove("hidden");
  box.querySelector(".backIcon").classList.remove("visible");
}
function closeAllMovieBoxes(currentSection) {
 
  if (!currentSection) return;

  // 🎯 FIX: Only select boxes inside the section the user is entering!
  const sectionBoxes = currentSection.querySelectorAll(".box");
  
  if (sectionBoxes.length === 0) return; 

  sectionBoxes.forEach((box) => {
    resetBox(box);
    box.classList.remove("hidden");
    box.classList.add("visible"); // This safely applies only to the current genre's elements
  });
}