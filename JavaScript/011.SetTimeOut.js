function x() {
    var i = 1;
    setTimeout(function () {
      console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
  }
  x();
  // Output:
  // Namaste Javascript
  // 1 // after waiting 3 seconds

  function y() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    console.log("Namaste Javascript");
  }
  y();
  // Output:
  // Namaste Javascript
  // 6
  // 6
  // 6
  // 6
  // 6