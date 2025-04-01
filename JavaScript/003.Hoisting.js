getName();
console.log(x);
console.log(getName);
// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization
// hoisting();
console.log(hoisting);
var x = 7;
let y = 5;
function getName() {
  console.log("Learning JS");
}

var hoisting = function() {
    console.log("This is hoisting example");
}