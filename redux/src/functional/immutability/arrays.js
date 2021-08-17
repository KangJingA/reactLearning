const numbers = [1, 2, 3];

// Adding
const added = [...numbers, 4];

// adding to a specific index
const index = numbers.indexOf(2);
const added1 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// removed
const removed = numbers.filter((n) => n !== 2);

//updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
