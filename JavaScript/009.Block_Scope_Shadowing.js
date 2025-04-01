var a = 100;
let b = 200;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a,b,c);
}

// console.log(c); // ReferenceError: c is not defined
console.log(a);
console.log(b);