const list = document.querySelector(".list");
const addGame = document.querySelector("#addGame");
const selectOption = document.querySelector("#selectOption");

renderGames(0);

const gameName = document.querySelector("#name");
const gameDesc = document.querySelector("#desc");
const gameViews = document.querySelector("#views");
const gameLikes = document.querySelector("#likes");

for (let i = 0; i < allGames.length; i++) {
  selectOption.innerHTML += `<option value="${i}">${allGames[i].genre}</option>`;
}

function addGames(genre) {
  let currentGame = allGames[genre].games;
  addGame.addEventListener("click", () => {
    currentGame.push({
      name: gameName.value,
      desc: gameDesc.value,
      views: gameViews.value,
      likes: gameLikes.value,
    });
    renderGames(genre);
  });
}
function renderGames(index) {
  list.innerHTML = "";
  let holdGames = allGames[index].games;
  for (let i = 0; i < holdGames.length; i++) {
    list.innerHTML += `
                  <li>
                      <h3>${holdGames[i].name}</h3>
                      <p>${holdGames[i].desc}</p>
                      <p>Views: ${holdGames[i].views}</p>
                      <p>Likes: ${holdGames[i].likes}</p>
                      <p><a href="#" onclick="removeElement(${holdGames[i]})">Remove</a></p>
                  </li>
                  `;
  }
  addGames(index);
}

function removeElement(i) {
  allGames.splice(i, 1);
  renderGames();
}
