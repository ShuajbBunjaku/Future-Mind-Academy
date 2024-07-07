const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page')
const play = document.querySelector('.play')


loadMovies(0);
loadMovieDetail(0,1)



for(let i = 0; i < allMovies.length; i++){
    movieGernes.innerHTML += `
        <option value="${i}">${allMovies[i].gerne}</option>
    `
}


function loadMovies(g){
    let allMoviesHtml = ''
    let gerneMovies = allMovies[g].movies;

    for(let i = 0; i < gerneMovies.length; i++){
        allMoviesHtml += `
        <li  onclick="loadMovieDetail(${g} , ${i}, this) ">
                            <h4>${gerneMovies[i].title}</h4>
                            <img src="assets/img/${gerneMovies[i].thumb}" alt="${gerneMovies[i].title}">
                            <p class="description">${gerneMovies[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
                            </div>
        </li>
        `
    }
    movielist.innerHTML = allMoviesHtml;
}

function loadMovieDetail(g, m ,activeMovie) {
    let currentMovie = allMovies[g].movies[m];

    movieDetailsPage.innerHTML = `
            <h1>${currentMovie.title} (2023)</h1>
            <h4>Date: ${currentMovie.date} | Length: ${currentMovie.length}</h4>
            <div class="container">
                ${currentMovie.trailer}
            </div>

            <h4>${currentMovie.actors}</h4>
            <p>${currentMovie.desc}</p>
        `



        document.querySelectorAll('.selected-movie').forEach(movie => movie.classList.remove('selected-movie'));
        if (activeMovie) {
            activeMovie.classList.add('selected-movie');
        }
}

play.addEventListener('click', ()=>{
    let intervalId = setInterval(randomiseMovie , 2000)
    play.classList.add('shuffle');
    if (play.classList.contains('shuffle')) {
        clearInterval(intervalId)
        play.classList.remove('shuffle')
    }
})

function randomiseMovie() {
    let randomGenreIndex = Math.floor(Math.random() * allMovies.length);
    let randomMovieIndex = Math.floor(Math.random() * allMovies[randomGenreIndex].movies.length);

    loadMovieDetail(randomGenreIndex, randomMovieIndex);
}