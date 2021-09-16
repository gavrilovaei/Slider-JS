const picture = document.querySelector(".slider__imge");

const pictureArr = ["./img/html.jpg", "./img/css.jpg", "./img/js.jpeg"]; 
// Почему ./ ?

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    picture.src = pictureArr[currentIndex];
}

//Подчеркнутые const и let?