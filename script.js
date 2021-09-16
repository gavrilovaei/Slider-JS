const img = document.querySelector(".slider__image");

const imgArr = ["./img/html.jpg", "./img/css.jpg", "./img/js.jpeg"]; 
// Почему ./ ?

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    img.src = imgArr[currentIndex];
}

