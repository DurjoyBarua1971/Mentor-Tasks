// CASE 1
function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}
var b = 10;
a();

// CASE 2
function d() {
    c();
    function c() {
        console.log(e); // 10
    }
}
var e = 20;
d();

// CASE 3
function f() {
    g();
    function g() {
        var h = 100;
        console.log(h); // 100
    }
}
var h = 10;
f();

// CASE 4
function a1() {
    var b1 = 50;
    c1();
    function c1() {
        console.log(b1); // 50
    }
}
a1();
// console.log(b1); // Error, Not Defined