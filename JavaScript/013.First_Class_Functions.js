// Case 1
function a() {
    console.log("Hello 1");
}
a(); // Hello

// Case 2
var b = function () {
    console.log("Hello 2");
};
b(); // Hello

// Case 3
c(); // "Hello A"
// d(); // TypeError
function c() {
    console.log("Hello A");
}
var d = function () {
    console.log("Hello B");
};

// Case 4
var b = function (param1) {
    console.log(param1); // prints " f() {} "
};
b(function () { });

// Other way of doing the same thing:
var b = function (param1) {
    console.log(param1);
};
function xyz() { }
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
    return function () { };
};
console.log(b()); //we log the entire fun within b.