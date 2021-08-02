'use strict';
// document.write('<h3>This is from js</h3>');


let userName = prompt('please enter your name');
alert("hey, wlecome in our Shop " + userName )
document.write(` <h2> Hi, ${userName} </h2>`);
console.log(typeof userName);

let input = prompt("input what type of the gift you wont to search for it ?");
alert( userName + " you are searching for --" + input +"--" )
document.write(`<h2> yes we have:  ${input}</h2>`);
console.log(typeof input);

let budget = Number(prompt("how much budget did you set ?"));
alert( userName + " you are searching for --" + input + "--"+" and your budet is: **" + budget +"**")
document.write(`<h2>  your budget:  ${budget}</h2>`);
console.log(typeof budget);

let age = Number(prompt('please enter the age of the person you are lookimg for a gift  ?'));//string
alert( userName + " you are searching for --" + input + "--"+" and your budet is: **" + budget + "** we have many gift for this age( " +age+ ")" )
document.write(`<h2> the age of the person:  ${age} </h2>`);
console.log(typeof age);




