'use strict';

const BasicCard = require('./BasicCard');
const ClozeCard = require('./ClozeCard');


let firstPresident = new BasicCard(
    'Who was the first president of the United States?', 'George Washington');

// 1 'Who was the first president of the United States?'
console.log(1, firstPresident.front); 

// 2 'George Washington'
console.log(2, firstPresident.back); 

let firstPresidentCloze = new ClozeCard(
    'George Washington was the first president of the United States.', 'George Washington');

// 3 'George Washington'
console.log(3, firstPresidentCloze.cloze); 

// 4 ' ... was the first president of the United States.
console.log(4, firstPresidentCloze.partial); 

// 5 'George Washington was the first president of the United States.
console.log(5, firstPresidentCloze.fullText);

// 6 Should throw or log an error because 'oops' doesn't appear in 'This doesn't work'
let brokenCloze = new ClozeCard('This doesn\'t work', 'oops');