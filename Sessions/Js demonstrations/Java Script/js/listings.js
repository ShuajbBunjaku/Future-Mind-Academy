let section = document.getElementById('section4');

let cardsData = [
    {
        imgUrl: 'assets/images/card-1.jpeg',
        id: '1',
        name: 'Cozy 5 Star Apartment',
        description: 'Short Description',
        currency: '$',
        price: '$899/night',
        location: {
            city: 'Barcelona',
            country: 'Spain'
        }
    },
    {
        imgUrl: 'assets/images/card-2.jpeg',
        id: '2',
        name: 'Office Studio',
        description: 'Short Description',
        currency: '$',
        price: '$1,119/night',
        location: {
            city: 'London',
            country: 'UK'
        }
    },
    {
        imgUrl: 'assets/images/card-3.jpeg',
        id: '3',
        name: 'Beautiful Castle',
        description: 'Short Description',
        currency: '$',
        price: '$459/night',
        location: {
            city: 'Milan',
            country: 'Italy'
        }
    }
];

let savedCardsData = JSON.parse(localStorage.getItem('cardsData')) || [];

localStorage.setItem('cardsData', JSON.stringify(cardsData));

function renderCards() {
    section.innerHTML = '';
    savedCardsData.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('section4Div', 'Section4Div2', 'section4Div1', 'card');
        cardDiv.id = card.id;

        cardDiv.innerHTML = `
            <div>
                <div class="cards">
                    <img class="width cursor" src="${card.imgUrl}" alt="card1">
                    <div class="marginB functionIcons">
                        <span class="material-symbols-outlined cursor" title="View">
                            overview_key
                        </span>
                        <span class="material-symbols-outlined edit cursor editFunction" title="Edit">
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
                    <h3 class="margin name" contenteditable="false">${card.name}</h3>
                    <p class="grey description" contenteditable="false">${card.description}</p>
                </div>
                <div class=" spanCenter">
                    <hr class="spanCenter">
                    <div class="price">
                        <span class="marginBottom prices" contenteditable="false">${card.price}</span>
                        <span class="center">
                            <span class="material-symbols-outlined grey marginBottom">
                                location_on
                            </span>
                            <span class="grey marginBottom"><span class="city" contenteditable="false">${card.location.city}</span>,<span class="country" contenteditable="false">${card.location.country}</span></span>
                        </span>
                    </div>
                </div>
            </div>
        `;

        section.appendChild(cardDiv);
    });
}

renderCards();

section.addEventListener('click', (event) => {
    let target = event.target;
    let card = target.closest('.card');

    if (target.classList.contains('editFunction')) {
        
        let cardId = card.id;
        let cardDataIndex = savedCardsData.findIndex(data => data.id === cardId);

        let cardName = card.querySelector('.name');
        let cardDescription = card.querySelector('.description');
        let cardPrice = card.querySelector('.prices');
        let cardCountry = card.querySelector('.country');
        let cardCity = card.querySelector('.city');

        if (cardName && cardDescription && cardPrice && cardCountry && cardCity) {
            let isEdit = cardName.contentEditable === 'true';

            if (!isEdit) {
                cardName.contentEditable = 'true';
                cardDescription.contentEditable = 'true';
                cardPrice.contentEditable = 'true';
                cardCountry.contentEditable = 'true';
                cardCity.contentEditable = 'true';
                cardName.focus();
            } else {
                cardName.contentEditable = 'false';
                cardDescription.contentEditable = 'false';
                cardPrice.contentEditable = 'false';
                cardCountry.contentEditable = 'false';
                cardCity.contentEditable = 'false';

                savedCardsData[cardDataIndex].name = cardName.innerText.trim();
                savedCardsData[cardDataIndex].description = cardDescription.innerText.trim();
                savedCardsData[cardDataIndex].price = cardPrice.innerText.trim();
                savedCardsData[cardDataIndex].location.city = cardCity.innerText.trim();
                savedCardsData[cardDataIndex].location.country = cardCountry.innerText.trim();

                localStorage.setItem('cardsData', JSON.stringify(savedCardsData));
                renderCards();
            }
        }
    }

    if (target.classList.contains('deleteFunction')) {
        let cardId = card.id;
        let cardDataIndex = savedCardsData.findIndex(data => data.id === cardId);

        card.remove();

        savedCardsData.splice(cardDataIndex, 1);

        localStorage.setItem('cardsData', JSON.stringify(savedCardsData));

        renderCards();
    }
});
