// 1 
// higher order
function greet(fn) {
  console.log(fn);
}

// higher order
function sayHello() {
  return function () {
    return "Hello World";
  };
}

// higher order function
// function that takes another function as an argument
// or returns a function
// or both
// .map() setTimeout()
let arr = [1, 2, 3];
arr.map((number) => number * 2);
