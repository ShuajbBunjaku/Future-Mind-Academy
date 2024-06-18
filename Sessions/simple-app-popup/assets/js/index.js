const h1 = document.querySelector('#title');
const imageDiv = document.querySelector('#imageDiv');

function loadPage(season){
    if(season === 'spring'){
        h1.textContent = 'Welcome To Spring'
        imageDiv.innerHTML = '<img class="img-xxl" id="image" src="assets/images/spring.png" alt="Spring" />';
    }else if(season ==='summer'){
        h1.textContent = 'Welcome To Summer';
        imageDiv.innerHTML = '<img class="img-xxl" id="image" src="assets/images/summer.png" alt="Spring" />';
    }else if (season === 'fall'){
        h1.textContent = 'Welcome To Fall'
        imageDiv.innerHTML = '<img class="img-xxl" id="image" src="assets/images/fall.png" alt="Spring" />';
    }else if (season === 'winter'){
        h1.textContent = 'Welcome To Winter'
        imageDiv.innerHTML = '<img class="img-xxl" id="image" src="assets/images/winter.png" alt="Spring" />';
    }else if (season === 'allseasons'){
        h1.textContent = 'Welcome To All Seasons'
        imageDiv.innerHTML = `
                <img class="img-xxl" id="image" src="assets/images/spring.png" alt="Spring" />
                <img class="img-xxl" id="image" src="assets/images/summer.png" alt="Spring" />
                <img class="img-xxl" id="image" src="assets/images/fall.png" alt="Spring" />
                <img class="img-xxl" id="image" src="assets/images/winter.png" alt="Spring" />
        `;
    }
}