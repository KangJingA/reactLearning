// 3
import { compose, pipe } from "loadash/fp";

let input = "    JavaScript    ";
const trim = (str) => str.trim();
// wrapInDiv
const wrapInDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str = str.toLowerCase());

// read from left to right now. easier
const transform = pipe(trim, toLowerCase, wrapInDiv);
// const transform = compose(wrapIndiv, toLowerCase, trim);

//const result = wrapInDiv(toLowerCase(trim(input)));
const result = transform(input); // removes all the paratheses
