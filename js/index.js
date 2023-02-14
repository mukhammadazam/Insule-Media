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

// for (let i = 0; i < 4; i++) {
//     text12[i].addEventListener('click', (e) => {
//         if (!pptext[i].className.includes('active')) {
//             pptext[i].classList.add('active')
//         } else {
//             pptext[i].classList.add('hidden')
//         }
//     })
// }

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

// let form = document.querySelector(".form1"),
//     formName = document.getElementById('formName'),
//     spanT = document.querySelectorAll(".spant"),
//     formNumber = document.getElementById("formNumber"),
//     btn = document.getElementById("btn");
// form.addEventListener('sumbit', function (e) {
//     e.preventDefault();
//     if (!formName.value) {
//         spanT[0].innerHTML = 'xato';

//     }  console.log(spanT[0]);
// })
let form = document.querySelector('.form'),
    forminput1 = document.querySelector(".forminput1"),
    forminput2 = document.querySelector(".forminput2"),
    formspan = document.querySelectorAll('.formspan'),
    btn = document.querySelector('.btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!forminput1.value) {
        formspan[0].innerText = 'iltimos ismingizni kiriting ';
        forminput1.classList.add('qizil')
    } else {
        formspan[0].innerText = '';
        forminput1.classList.remove('qizil');
        forminput1.classList.add('yashil');
        forminput1.value = '';

    }
    if (!forminput2.value) {
        formspan[1].innerText = 'email manzil kiriting iltimos';
        forminput2.classList.add('qizil');

    } else {
        formspan[1].innerText = '';
        forminput2.classList.remove('qizil');
        forminput2.classList.add('yashil')
        forminput2.value = '';
    }

});

//ikkinchi valideshin
let form1 = document.querySelector('.form11'),
    input1 = document.querySelector(".input1"),
    input2 = document.querySelector(".input2");
let leni = document.querySelectorAll(".leni1");
form1.addEventListener('submit', function (e) {
    e.preventDefault(e);
    if (!input1.value) {
        leni[0].innerText = 'iltimos ismingizni kiriting ';
        input1.classList.add('qizil1')
    } else {
        leni[0].innerText = '';
        input1.classList.remove('qizil1');
        input1.classList.add('yashil1');
        input1.value = '';

    }
    if (!input2.value) {
        leni[1].innerText = 'email manzil kiriting iltimos';
        input2.classList.add('qizil1');

    } else {
        leni[1].innerText = '';
        input2.classList.remove('qizil1');
        input2.classList.add('yashil1')
        input2.value = '';
    }
})

