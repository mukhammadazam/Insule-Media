let drabdawn = document.querySelector(".drabdawn");
let list11 = document.querySelector('.list11');
let list12 = document.querySelector('.list12');
let list13 = document.querySelector(".list13");
let list14 = document.querySelector(".list14");
drabdawn.addEventListener('click', function () {
    list11.classList.toggle("list12");
    list13.classList.toggle("list14");
});