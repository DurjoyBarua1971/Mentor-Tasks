// Case 1
function outer() {
    var a = 10;
    function inner() {
        console.log(a, b);
    } // inner forms a closure with outer
    let b = 5;
    return inner;
}
outer()(); // 10

// Case 2
function outest() {
    var c = 20;
    function outer(str) {
        let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
outest()("Hello There")(); // 10 20 "Hello There"

// Case 3


// without closures
var count1 = 0;
function increment() {
    count1++;
}
// in the above code, anyone can access count and change it.


// (with closures) -> put everything into a function
// function counter() {
//   var count = 0;
//   function increment(){
//     count++;
//   }
// }
// console.log(count); // this will give referenceError as count can't be accessed. So now we are able to achieve hiding of data


// (increment with function using closure) true function
// function counter() {
//   var count = 0;
//   return function increment(){
//     count++;
//     console.log(count);
//   }
// }
// var counter1 = counter();
// counter1();

// var counter2 = counter();
// counter2(); 

class Counter {
    constructor() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.log(count);
        };
        this.decrementCounter = function () {
            count--;
            console.log(count);
        };
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
// returns 1 2 1