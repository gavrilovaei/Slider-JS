const img_1 = document.querySelector(".slider__image_1");

const imgArr = ["img/html.jpg", "img/css.jpg", "img/js.jpeg"]; 

let currentIndex = 0;

function slide(direction) {  
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
            currentIndex = imgArr.length - 1;
        }        
    img_1.src = imgArr[currentIndex];
}
slide(currentIndex); 

// Второй слайдер:

const img_2 = document.querySelector(".slider__image_2");

const dots = document.querySelectorAll('.slider__dot');
// Выборка точек

function changeSlide(index) {

    img_2.style.display = "none";
    setTimeout( () => {
        img_2.style.display = "block";
    });

    img_2.src = imgArr[index];
    updateDots(index);
}
// Функция, отвечающая за смену слайдов.

function changeIndex(ind) {
    currentIndex = ind;
    changeSlide(currentIndex);
}
// Ф-ция, изменяющая текущий индекс в соответствии с обработчиком на кнопках-точках и передающая его ф-ции смены слайдов
// _______________________________ 

// Чтобы менять класс active между кнопками мы:
// будеь проходится по массиву dots
// у всех сразу элементов при обходе массива будем снимать класс active
// а потом у одного конкретного элемента этот класс активного состояния добавим:

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}
// Добавим вызов этой функции в конец функции changeSlide - т.е. поменяли слайд и следом обновляем вид точек
// ________________________________________________

// Третий слайдер - и стрелки и точки вместе:










