const selectOption = document.querySelector('.selectOption');
const movieThumb = document.querySelector('#movieThumb')
const movieDesc = document.querySelector('.movieDesc')

for(let i = 0 ; i < allMovies.length; i++){
    selectOption.innerHTML += `
    <option value="${i}">${allMovies[i].gerne}</option>
    `
}

loadMovies(0)
loadMovieDesc(0,0)

function loadMovies(genre){
    let holdMoviesString = ``
    let holdMovieGenre = allMovies[genre].movies

 
    for(let i = 0; i < holdMovieGenre.length; i++){
        holdMoviesString += `
        <li onclick="loadMovieDesc(${genre},${i})">
            <h4>${holdMovieGenre[i].title}</h4>
                <img src="assets/img/${holdMovieGenre[i].thumb}" class="img-xxl" alt="">
                <p>Actor ${holdMovieGenre[i].actors}</p>
                <p>${holdMovieGenre[i].desc}</p>
                <p>Length: ${holdMovieGenre[i].length}</p>
                <p>Date: ${holdMovieGenre[i].date}</p>
            </li>
        `
    }
    movieThumb.innerHTML = holdMoviesString
}

function loadMovieDesc(movieGenre, movieIndex){
    let holdMovieGenre = allMovies[movieGenre].movies

    movieDesc.innerHTML = `
                            <h1>${holdMovieGenre[movieIndex].title}</h1>
                            <p>${holdMovieGenre[movieIndex].date}</p>
                            <p>${holdMovieGenre[movieIndex].actors}</p>
                            <div class="container">
                            ${holdMovieGenre[movieIndex].trailer}

                            </div>
                            <p>${holdMovieGenre[movieIndex].actors}</p>
                            <p>${holdMovieGenre[movieIndex].desc}</p>
    
    `
}