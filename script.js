const img = document.querySelector(".slider__image");

const imgArr = ["img/html.jpg", "img/css.jpg", "img/js.jpeg"];

const dots = document.querySelectorAll('.slider__dot');

let currentIndex = 0;

function hendleDotClick(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function hendleArrowClick(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);
}

function slide(index) {

    img.style.display = "none";
    setTimeout(() => {
        img.style.display = "block";
    }, 100);

    img.src = imgArr[currentIndex];
    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}