// 2
// functional programming
// write bunch of small and reusable functions
// compose them to build more complex functions

// trim string and concat
// non-functional way of doing things
let input = "    JavaScript    ";
let output = "<div" + input.trim() + "<div>";

// functional way of doing things

// trim
const trim = (str) => str.trim();
// wrapInDiv
const wrapInDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str = str.toLowerCase());

// composition
// problem 1: read from right to left
// problem 2: many parentheses
const result = wrapInDiv(toLowerCase(trim(input)));
