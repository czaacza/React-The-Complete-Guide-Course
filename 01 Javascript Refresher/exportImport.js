// In javascript we have two types of exports

// 1. default export:
const person = {
  name: 'Mati',
};

export default person;

// this way, we can refer to a person by using any name in the file in which we import
// in another file:
import prs from 'exportImport.js';
console.log(prs.name);

// 2. export:

export const people = [
  {
    name: 'Kasia',
    age: 18,
  },
  {
    name: 'Kacper',
    age: 21,
  },
];

// this way, we can dynamically import a specific item of a given name
// in another file:
import { people } from 'exportImport.js';
console.log(people.length);
