const movieGernes = document.querySelector(".movieGernes");
const movielist = document.querySelector(".movielist");
const movieDetails = document.querySelector(".movie-details-page");

for (let i = 0; i < allMovies.length; i++) {
  movieGernes.innerHTML += `<option value="${i}">${allMovies[i].gerne}</option>`;
}

showMovies(0);
loadMovieDetail(0, 1);
function showMovies(genre) {
  movielist.innerHTML = "";
  let holdMovieIndex = allMovies[genre].movies;

  for (let i = 0; i < holdMovieIndex.length; i++) {
    movielist.innerHTML += `
        <li onclick="loadMovieDetail(${genre} , ${i})">
                            <h4>${holdMovieIndex[i].title}</h4>
                            <img src="assets/img/${holdMovieIndex[i].thumb}" alt="Plane">
                            <p class="description">${holdMovieIndex[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${holdMovieIndex[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${holdMovieIndex[i].length}</span> </div>
                            </div>
                        </li>
        `;
  }
}

function loadMovieDetail(genre, movieIndex) {
  let holdMoveIndex = allMovies[genre].movies[movieIndex];

  movieDetails.innerHTML = `
    <h1>${holdMoveIndex.title} (2023)</h1>
    <h4>Date: ${holdMoveIndex.date} | Length: ${holdMoveIndex.length}</h4>
    <div class="container">
    ${holdMoveIndex.trailer}
    </div>

    <h4>${holdMoveIndex.actors}</h4>
    <p>${holdMoveIndex.desc}</p>
    `;
}
function populateMovies(index) {
  showMovies(index);
}
