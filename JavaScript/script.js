"use strict";
// let a = 34;
let a = `This is me`;
console.log(a);

function greet() {
  console.log("Hello World");
}
greet();

let obj = {
  name: "Suman",
  age: 21,
  class: "12th",
  func: function () {
    console.log("function inside obj");
  },
};
obj.func();

document.addEventListener(`click`, function click() {
  console.log("clicked");
  alert(`Hello ${obj.name}`);
  let con = confirm("Are you sure?");
  console.log(con);
});


