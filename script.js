const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(" body,.navbar-container,.left-menu-icon,.toggle,.empty-state");

ball.addEventListener('click',() =>{
  items.forEach(item => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");

const apiKey = "19be8a9e";

class Movie {
  constructor(title, year, genre, poster, plot, rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.poster = poster;
    this.plot = plot;
    this.rating = rating;
  }

  display() {
    return `
      <div class="movie-card">
        <img src="${this.poster}" alt="${this.title}">
        <div class="movie-info">
          <h2>${this.title}</h2>
          <p><strong>Year:</strong> ${this.year}</p>
          <p><strong>Genre:</strong> ${this.genre}</p>
          <p><strong>IMDB:</strong>  ${this.rating}</p>
          <p>${this.plot}</p>
        </div>
      </div>
    `;
  }
}

searchBtn.addEventListener("click", () => {
  const movieName = searchInput.value.trim();

  if (movieName === "") {
    alert("Please enter a movie name");
    return;
  }

  movieContainer.innerHTML = "<p>Loading...</p>";

  fetchMovie(movieName);
});

function fetchMovie(movieName) {
  const url = `https://www.omdbapi.com/?apikey=19be8a9e&t=${movieName}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        movieContainer.innerHTML = "<p>Movie not found</p>";
        return;
      }

      const movie = new Movie(
        data.Title,
        data.Year,
        data.Genre,
        data.Poster,
        data.Plot,
        data.imdbRating
      );

      movieContainer.innerHTML = movie.display();
    })
    .catch(() => {
      movieContainer.innerHTML = "<p>Error fetching movie</p>";
    });
}
