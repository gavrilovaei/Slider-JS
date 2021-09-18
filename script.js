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

function changeSlide(index) {

    img_2.style.display = "none";
    setTimeout( () => {
        img_2.style.display = "block";
    });

    img_2.src = imgArr[index];
    updateDots(index);
}

function changeIndex(ind) {
    currentIndex = ind;
    changeSlide(currentIndex);    
}

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


// Третий слайдер - и стрелки и точки вместе:

const img_3 = document.querySelector(".slider__image_3");

const dot_3s = document.querySelectorAll('.slider__dot_3');
// Выборка точек

let currentIndex_3 = 0;

function changeIndex_3 (ind_3) {
   currentIndex_3 = ind_3;
   slide_3(currentIndex_3);   
}

function nextIndex(direction_3) {
    currentIndex_3 += direction_3;
    if (currentIndex_3 >= imgArr.length) {
        currentIndex_3 = 0;
    } else if (currentIndex_3 < 0) {
            currentIndex_3 = imgArr.length - 1;
        }   
   slide_3(currentIndex_3);  
}

function slide_3(index) {    
         
    img_3.src = imgArr[currentIndex_3];
    updateDot_3s(index);
}

function updateDot_3s(index) {
    for (let dot_3 of dot_3s) {
        dot_3.classList.remove('active');
    }
    dot_3s[index].classList.add('active');
}






