let defaultTitle = document.title;
let faviconElement = document.querySelector("link[rel~='icon']");
let defaultFavicon = faviconElement.href;

let notifactionInterval;

function startNotification(message, isInDefaultState) {
    if (notifactionInterval)
        endNotification();
    
    notifactionInterval = setInterval(() => {
        if (isInDefaultState)
            setToNotifaction(message);
        else
            resetToDefualt();

        isInDefaultState = !isInDefaultState;
    }, 1000);
}

function endNotification() {
    clearInterval(notifactionInterval);
    resetToDefualt();
}

function resetToDefualt() {
    document.title = defaultTitle;
    faviconElement.href = defaultFavicon;
}

function setToNotifaction(message) {
    document.title = message;
    faviconElement.href = 'bell.png';
}

function getBellIconLink() {
    const canvas = document.createElement('canvas');
    canvas.widh = 32;
    canvas.height = 32;
    const context = canvas.getContext('2D');
    context.font = '32px sans-serif';
    context.fillText('🔔', 0, 30);

    return canvas.toDataURL('download.png');
}
