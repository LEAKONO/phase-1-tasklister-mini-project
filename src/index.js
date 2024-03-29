document.addEventListener("DOMContentLoaded", () => {
  console.log('This page was loaded.')

});

 const form=document.querySelector(" #main-content");
 
 form.style.fontWeight = '700'; // set font weight
form.style.textTransform = 'uppercase'; // set to uppercase
form.style.color = 'blue';
form.style.border = '1px solid black';

const p = document.createElement('p');

p.innerText = 'This paragraph is created using JavaScript';

const body = document.querySelector('body');

body.append(p);
let p2 = document.createElement('p');

p2.innerText = 'The second paragraph';

let head = document.querySelector('body');
let p1 = document.querySelector(" #main-content");

body.insertBefore(p2, p1);
