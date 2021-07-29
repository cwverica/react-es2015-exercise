import { choice, remove } from "./helpers";
import foods from "./foods";

const fruit = choice(foods);


console.log(`I'd like one ${fruit}, please!`);
console.log(`Here you go: ${fruit}`);
console.log("Delicious! May I have another?");

remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${foods.length} left.`)