// spread operator - used to split up array elements/object properties into e.g arguments
const oldArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = [...oldArray, 8, 9, 10];

const oldObject = {
  name: 'mati',
  surname: 'czacza',
  age: '20',
};

const newObject = {
  ...oldObject,
  shoeSize: '44',
  dickSize: '18cm',
};

// rest operator - used to merge a list of function arguments into an array

const sortArgs = (...args) => {
  return args.sort();
};
