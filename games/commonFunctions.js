var i = true; // int, float, boolean, string ""

if (boolean) {

}

if (boolean) {

} else {

}

for (var i = 0; i < 10; i++) {

}

function circle(size) {

}

var numberSquared = square(number);

function square(n) {
  if (n < 10) {
    return n*n;
  } else {
    return 0;
  }
}

var number = print0ToN(10);

if (print0ToN(0)) {
  print("success");
} else {
  print("failure");
}

// create n alerts, for numbers from 0 to N
function print0ToN(n) {
  for (var i = 0; //starting value
        i < n;    // condition to continue
        i=i+3     // happens at the end of each loop
      ) {
    alert(i);
  }
  return 0;
}

// Write a function that multiples two numbers
var multiplicationResult = multiply(3, 10);

// return multiplication only if x is greater than 10. If x is <= 10, return 0
function multiply(x, y) {
  if (x > 10 ) {
    return x * y ;
  } else {
    return 0;
  }
}
