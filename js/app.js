'use strict';
// document.write('<h3>This is from js</h3>');


let userName = prompt('please enter your name');
document.write(` <h2> Hi, ${userName} </h2>`);
console.log(typeof userName);

let input = prompt("input what type of the gift you wont to seaech for it ?");
document.write(`<h2> yes we have:  ${input}</h2>`);
console.log(typeof input);

let budget = Number(prompt("how much budget did you set ?"));
document.write(`<h2>  your budget:  ${budget}</h2>`);
console.log(typeof budget);

let age = Number(prompt('please enter the age of the person you are lookimg for a gift  ?'));//string
document.write(`<h2> the age of the person:  ${age} </h2>`);
console.log(typeof age);




