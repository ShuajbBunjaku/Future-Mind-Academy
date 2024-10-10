// Sample admin credentials
const credentials = {
  username: "admin",
  password: "admin123",
};

// Sample game data
let games = [
  {
    name: "CG FC 24",
    thumbnail: "images/cgfc.avif",
    url: "https://www.crazygames.com/game/cg-fc-24",
    likes: 150,
    views: 2000,
  },
  {
    name: "Supermarket sort",
    thumbnail: "images/supermarket.avif",
    url: "https://www.crazygames.com/game/supermarket-sort-grocery-game",
    likes: 250,
    views: 5000,
  },
  {
    name: "Gun Strike Runner",
    thumbnail: "images/gun-strike-runner.avif",
    url: "https://www.crazygames.com/game/gun-strike-runner",
    likes: 188,
    views: 4800,
  },
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited

//Add your code below

const loginButton = document.querySelector("#loginButton");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginPage = document.querySelector("#login-page");
const dashboardPage = document.querySelector("#dashboard-page");
const loginError = document.querySelector("#login-error");

const gameList = document.querySelector("#game-list");

const closeEditModal = document.querySelector("#close-edit-modal");
const saveChanges = document.querySelector("#saveChanges");
const editPage = document.querySelector("#edit-modal");
const editName = document.querySelector("#edit-name");
const editThumbnail = document.querySelector("#edit-thumbnail");
const editUrl = document.querySelector("#edit-url");
const editlikes = document.querySelector("#edit-likes");
const editViews = document.querySelector("#edit-views");

const closeRemoveModel = document.querySelector("#close-remove-modal");
const removeModal = document.querySelector("#remove-modal");
const cancelRemove = document.querySelector("#cancel-remove");
const confirmRemove = document.querySelector("#confirm-remove");

const addNewGame = document.querySelector("#add-new-game-btn");

renderGames();

loginButton.addEventListener("click", () => {
  if (
    credentials.username === username.value &&
    credentials.password === password.value
  ) {
    loginPage.style.display = "none";
    dashboardPage.style.display = "block";
  } else {
    loginError.style.display = "block";
  }
});

function renderGames() {
  gameList.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    gameList.innerHTML += `
        <tr>
                    <td>${games[i].name}</td>
                    <td><img src="${games[i].thumbnail}" alt=""></td>
                    <td><a href="${games[i].url}">Link</a></td>
                    <td>${games[i].likes}</td>
                    <td>${games[i].views}</td>
                    <td><button class="edit" onclick="openEditModal(${i})">Edit</button></td>
                    <td><button class="remove" onclick="openRemoveModal(${i})">Remove</button></td>
                </tr>
        `;
  }
}

function openEditModal(index) {
  editPage.style.display = "block";
  closeEditModal.addEventListener(
    "click",
    () => (editPage.style.display = "none")
  );

  editName.value = games[index].name;
  editThumbnail.value = games[index].thumbnail;
  editUrl.value = games[index].url;
  editViews.value = games[index].views;
  editlikes.value = games[index].likes;
0
  saveChanges.addEventListener("click", () => {
    editPage.style.display = "none";

    games[index].name = editName.value;
    games[index].thumbnail = editThumbnail.value;
    games[index].url = editUrl.value;
    games[index].views = editViews.value;
    games[index].likes = editlikes.value;

    renderGames();
  });
}

function openRemoveModal(index) {
  removeModal.style.display = "block";

  cancelRemove.addEventListener("click", () => {
    removeModal.style.display = "none";
  });
  closeRemoveModel.addEventListener("click", () => {
    removeModal.style.display = "none";
  });

  confirmRemove.addEventListener("click", () => {
    removeModal.style.display = "none";
    games.splice(index, 1);
    renderGames();
  });
}

addNewGame.addEventListener("click", () => {
  editPage.style.display = "block";
});

saveChanges.addEventListener("click", () => {
  editPage.style.display = "none";

  games.push({
    name: editName.value,
    thumbnail: editThumbnail.value,
    url: editUrl.value,
    views: parseInt(editViews.value),
    likes: parseInt(editlikes.value),
  });
  renderGames();
});
