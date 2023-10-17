
const images = [
    'image/image/love.jpg',
    'image/image/player.png',
    'image/image/love.png',


];
let imgIndex = 0;
const imgElement = document.getElementById('slider');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)