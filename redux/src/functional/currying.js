// 4

import { compose, pipe } from "loadash/fp";

let input = "    JavaScript    ";

const trim = (str) => str.trim();
const wrap = (type, str) => `<${type}>${str}<${type}>`;
const toLowerCase = (str = str.toLowerCase());

// read from left to right now. easier
const transform = pipe(trim, toLowerCase, wrap);

// error. because wrap now takes in 2 arguments.
// now its wrap("javascript, undefined")
const result = transform(input); // removes all the paratheses

// currying
// method that allows us to take a function that has N arguments
// convert into a function that has a single argument

// normal
// function add(a, b) {
//   return a + b;
// }

// curried
function add(a) {
  // 1
  return function (b) {
    // 2
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;
// separate using paratheses
// calls 1 then calls 2
add(1)(5);

const newWrap = (type) => (str) => `<${type}>${str}<${type}>`;

const newTransform = pipe(trim, toLowerCase, wrap("div")); // wrap("div") returns a function
