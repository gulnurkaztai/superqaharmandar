import superqaharmandar from "./superqaharmandar.json" assert { type: "json" };
import uniqueRandomArray from 'unique-random-array';

const all = superqaharmandar;
const random = uniqueRandomArray(superqaharmandar);

console.log(superqaharmandar)
console.log(random())
console.log(all)
