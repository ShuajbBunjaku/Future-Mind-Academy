let section = document.getElementById(`section4`);

let cards = document.querySelectorAll('.cards');

let cardsData = [
    {
        imgUrl: `assets/images/card-1.jpeg`,
        id: `1`,
        name: `Cozy 5 Star Apartment`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$899/night`,
        location: {
            city: `Barcelona`,
            country: `Spain`
        }
    },
    {
        imgUrl: `assets/images/card-2.jpeg`,
        id: `2`,
        name: `Office Studio`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$1.119/night`,
        location: {
            city: `London`,
            country: `UK`
        }
    },
    {
        imgUrl: `assets/images/card-3.jpeg`,
        id: `3`,
        name: `Beautiful Castle`,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
        currency: `$`,
        price: `$459/night`,
        location: {
            city: `Milan`,
            country: `Italy`
        }
    }
];

let storedCardsData = JSON.parse(localStorage.getItem('cardsData'));

if (!storedCardsData) {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
    storedCardsData = JSON.parse(localStorage.getItem('cardsData'));
}

function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('section4DIv', 'Section4Div2', 'section4Div1');
    cardDiv.id = card.id;

    cardDiv.innerHTML = `
    <div>
        <div class="cards">
            <img class="width cursor" src="${card.imgUrl}" alt="card1">
            <div class="marginB ">
                <span class="material-symbols-outlined cursor" title="View">
                    overview_key
                </span>
                <span class="material-symbols-outlined edit cursor editFuntion"   title="Edit">
                    edit
                </span>

                <span class="material-symbols-outlined delete cursor deleteFunction" title="Delete">
                    close
                </span>
            </div>
        </div>
    </div>
    <div class=" spaceBetween">
        <div class="spanCenter margin">
            <h3 class="margin">${card.name}</h3>
            <p class="grey">${card.description}
            </p>
        </div>
        <div class=" spanCenter">
            <hr class="spanCenter">
            <div class="price">
                <span class="marginBottom">
                    ${card.price}/night
                </span>
                <span class="center">
                    <span class="material-symbols-outlined grey marginBottom">
                        location_on
                    </span>
                    <span class="grey marginBottom">${card.location.city}, ${card.location.country}</span>
                </span>
            </div>
        </div>
    </div>
    `
        ;

    return cardDiv;
}

cardsData.forEach(card => {
    const cardElement = createCardElement(card);
    section.appendChild(cardElement);
});


let edit = document.querySelectorAll('edit');
let deleteIcon = document.querySelectorAll('delete');

// edit.addEventListener('click', () => {
//     localStorage.getItem()
// })