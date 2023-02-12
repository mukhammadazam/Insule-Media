let drabdawn = document.querySelector(".drabdawn");
let list11 = document.querySelector('.list11');
let list12 = document.querySelector('.list12');
let list13 = document.querySelector(".list13");
let list14 = document.querySelector(".list14");
let pptext = document.querySelectorAll('.pptext');
let text12 = document.querySelectorAll('.text12');

drabdawn.addEventListener('click', function () {
    list11.classList.toggle("list12");
    list13.classList.toggle("list14");

});


// console.log(pptext);

for (let i = 0; i < 4; i++) {
    text12[i].addEventListener('click', (e) => {
        if (!pptext[i].className.includes('active')) {
            pptext[i].classList.add('active')
        } else {
            pptext[i].classList.add('hidden')
        }
    })
}

document.querySelectorAll('details').forEach((accordion) => {
    accordion.addEventListener('click', (e) => {
        document.querySelectorAll('details').forEach((event) => {
            if (accordion !== event) {
                event.removeAttribute('open');
            }
        });
    });
});

// pptext[i].classList.add('hidden')

// text12[0].addEventListener('click', function () {
//     pptext[0].classList.toggle('pptext1')
// })
// text12[1].addEventListener('click', function () {
//     pptext[1].classList.toggle('pptext1')
// })
// text12[2].addEventListener('click', function () {
//     pptext[2].classList.toggle('pptext1')
// })
// for (let i = 0; i < 4; i++) {
//     text12[i].addEventListener('click', function () {
//         const content = this.nextElementSibling;
//         this.classList.toggle('pptext1')
//         if(content.style.maxHeight) {
//             content.style.maxHeight = null
//         }else {
//             content.style
//         }
//     })
// }



// pptext[i].classList.toggle('pptext1')
// console.log(pptext[i].className.includes('pptext1'));
// // console.log(pptext[i]);
// if (pptext[i].className.includes('pptext1')) {
//     // pptext[i].classList.remove('pptext1')
// }