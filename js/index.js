let drabdawn = document.querySelector(".drabdawn");
let list11 = document.querySelector('.list11');
let list12 = document.querySelector('.list12');
let list13 = document.querySelector(".list13");
let list14 = document.querySelector(".list14");
let pptext = document.querySelector('.pptext');
let text12 = document.querySelector('.text12');
drabdawn.addEventListener('click', function () {
    list11.classList.toggle("list12");
    list13.classList.toggle("list14");

});
text12.addEventListener('click', function () {
    pptext.classList.toggle('pptext1')
})

