let defaultNotifications = [
    "New Message from Joe Doe X1",
    "New Message from Joe Doe X2",
    "New Message from Joe Doe X3",
    "New Message from Joe Doe X4",
    "New Message from Joe Doe X5",

]

localStorage.setItem("notifications", JSON.stringify(defaultNotifications));


let notifications = JSON.parse(localStorage.getItem("notifications"))


let listElement = document.getElementById('notifications')

notifications.forEach((notifications) => {
    let el = document.createElement('p');
    el.textContent = notifications;
    listElement.appendChild(el)
});


let notifaciconsNumberHtml = document.getElementById(`notification5`);
notifaciconsNumberHtml.textContent = notifications.length;


let notificationsDiv = document.getElementById('notificationDiv');
let notificationsMsg = document.getElementById('notifications')
let notificationsOpen = false;


notificationsDiv.addEventListener('click', () => {
    if (!notificationsOpen) {
        notificationsMsg.style.display = `block`
        notificationsOpen = true;
    } else {
        notificationsMsg.style.display = 'none';
        notificationsOpen = false;
    }
})