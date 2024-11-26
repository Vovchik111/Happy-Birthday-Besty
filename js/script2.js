let button = document.querySelector('.button')
button.onclick = function () {

let element1 = document.querySelector('.detail_1');
element1.classList.add('detail_1_button');

let element2 = document.querySelector('.detail_2');
element2.classList.add('detail_2_button');

let element3 = document.querySelector('.detail_3');
element3.classList.add('detail_3_button');

let element4 = document.querySelector('.detail_4');
element4.classList.add('detail_4_button');


}
let button_memory = document.querySelector('.button_memory')
button_memory.onclick = function () {
let element5 = document.querySelector('.memory_content');
element5.classList.add('memory_open');
}