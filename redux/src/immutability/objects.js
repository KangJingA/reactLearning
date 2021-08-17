const person = { name: "John" };

// for person object to be immutatble, you cannot update person directly
// rather, create a new object and assign the updated property

// const updated = Object.assign({}, person, {name: "Bob", age: 30})

// much better to use spread operator
// note that name will be overwritten with the new value
const updated = { ...person, name: "Bob" };

// performing a deep copy
// so that nested objects also change

const person1 = { name: "Bob", address: { city: "Singapore" } };

const updated1 = {
  ...person1,
  address: { ...person.address, city: "New York" },
  name: "Tim",
};

// this is quite verbose. so use libraries instead