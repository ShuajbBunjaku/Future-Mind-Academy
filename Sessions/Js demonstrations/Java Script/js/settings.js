const settingDisplay = document.querySelector('#settings > span');
const settingsOptions = document.getElementById('settingsNone');
const colorBalls = document.querySelectorAll('.color .round');
const dashboardActive = document.querySelector('.red');
const root = document.documentElement;
const notificationsNumber = document.getElementById("notification5");

settingsOptions.style.display = 'none';

settingDisplay.addEventListener('click', () => {
    settingsOptions.style.display = (settingsOptions.style.display === 'none') ? 'block' : 'none';
});

const storedColor = localStorage.getItem('color');

if (storedColor) {
    colorBalls.forEach((ball) => {
        if (window.getComputedStyle(ball).backgroundColor === storedColor) {
            ball.classList.add('selected');
        } else {
            ball.classList.remove('selected');
        }
    });

    updateColors(storedColor);
} else {
    const defaultColor = window.getComputedStyle(colorBalls[0]).backgroundColor;
    updateColors(defaultColor);
}

document.querySelector('.color').addEventListener('click', (event) => {
    if (event.target.classList.contains('round')) {
        colorBalls.forEach((ball) => {
            ball.classList.remove('selected');
        });
        event.target.classList.add('selected');

        const colorOfBall = window.getComputedStyle(event.target).backgroundColor;
        updateColors(colorOfBall);

        localStorage.setItem('color', colorOfBall);
    }
});

const backgroundColor = document.querySelectorAll('.backgroundColor .round');
const checkBox = document.querySelector('.checkbox');
const aside = document.querySelector('.aside');
let color = `rgba(0, 0, 0, 0.4)`;
let backgroundImageUrl = './assets/images/sidebar-1.jpg';

backgroundColor.forEach((ball) => {
    ball.addEventListener('click', (event) => {
        backgroundColor.forEach((ball) => {
            ball.classList.remove('selected');
        });
        event.target.classList.add('selected');

        color = window.getComputedStyle(event.target).backgroundColor;
        localStorage.setItem('asideColor', color);


        updateBackground(color);
    });
});

checkBox.addEventListener('change', function () {
    updateBackground();
});

let colorBarImages = document.querySelectorAll('.image img');

colorBarImages.forEach((image) => {
    image.addEventListener('click', function () {
        colorBarImages.forEach((img) => {
            img.classList.remove('selected');
        });

        image.classList.add('selected');

        let imageUrl = image.getAttribute('src');
        backgroundImageUrl = imageUrl;

        let colorOfImage = window.getComputedStyle(image).backgroundColor;
        color = colorOfImage;

        localStorage.setItem('backgroundImageUrl', imageUrl);

        updateBackground();
    });
});

function updateColors(color) {
    dashboardActive.style.backgroundColor = color;
    notificationsNumber.style.backgroundColor = color;
    root.style.setProperty('--background-color', color);

    localStorage.setItem('dashboardColor', color);
}

function updateBackground() {
    const storedBackgroundImageUrl = localStorage.getItem('backgroundImageUrl');
    const storedAsideColor = localStorage.getItem('asideColor');

    const aside = document.querySelector('.aside');

    if (checkBox.checked && storedBackgroundImageUrl) {
        aside.style.background = `${storedAsideColor || color} url(${storedBackgroundImageUrl})`;
        aside.style.backgroundSize = "cover";
    } else {
        aside.style.background = `${storedAsideColor || color}`;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const storedBackgroundImageUrl = localStorage.getItem('backgroundImageUrl');
    const storedDashboardColor = localStorage.getItem('dashboardColor');
    const storedAsideColor = localStorage.getItem('asideColor');

    if (storedBackgroundImageUrl) {
        backgroundImageUrl = storedBackgroundImageUrl;
        updateBackground();
    }

    if (storedDashboardColor) {
        updateColors(storedDashboardColor);
    }

    if (storedAsideColor) {
        color = storedAsideColor;
        updateBackground()
    }
});
