const img = document.querySelector(".slider__image");

const imgArr = ["./img/html.jpg", "./img/css.jpg", "./img/js.jpeg"]; 
// Почему ./ ?

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex =0;
    } else if (currentIndex < 0) {
            currentIndex = imgArr.length - 1;
        }
    img.src = imgArr[currentIndex];
}

