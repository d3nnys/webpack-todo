// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН
// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ
// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
// 5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ


const from = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('.list');
const btn = document.querySelector('.ul-btn')

function submitBandler(event) {
    event.preventDefault();
    let inputValue = input.value.trim();
    console.log(inputValue);
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    list.appendChild(listItem);
    const parsedItem = JSON.parse(localStorage.getItem('value')) || [];
    parsedItem.push(inputValue);
    storage(parsedItem);
    input.value = '';
}

from.addEventListener('submit', submitBandler);

function storage(parametr) {
    localStorage.setItem('value', JSON.stringify(parametr));
}

function htmlText() {
    const storageValue = localStorage.getItem('value');
    if (storageValue) {
        const parsedValue = JSON.parse(storageValue);

        for (let item of parsedValue) {
          const newEl = document.createElement('li');
          newEl.textContent = item;
          list.append(newEl);
        }
    }
}

htmlText();

function clearBtn() {
    localStorage.removeItem('value');
    list.innerHTML = '';
}

btn.addEventListener('click', clearBtn)