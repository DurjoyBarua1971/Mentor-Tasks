setTimeout(function () {
    console.log("Timer After 1 Second");
}, 1000);

setTimeout(function () {
    console.log("timer After 5 Seconds");
}, 5000);
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});

// Another Example of callback
function printStr(str, cb) {
    setTimeout(() => {
        console.log(str);
        cb();
    }, Math.floor(Math.random() * 100) + 1);
}
function printAll() {
    printStr("A", () => {
        printStr("B", () => {
            printStr("C", () => { });
        });
    });
}
printAll(); // A B C // in order