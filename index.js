
import { choice, remove } from "./helpers";
import fruits from "./foods";

function getRandomFruit() {
  // Randomly draw a fruit from the array
  const randomFruit = choice(fruits);

  // Log the messages
  console.log(`I'd like one ${randomFruit}, please.`);
  console.log(`Here you go: ${randomFruit}`);
  console.log("Delicious! May I have another?");

  // Remove the fruit from the array of fruits
  remove(fruits, randomFruit);

  // Log the message about the remaining fruits
  console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
}

getRandomFruit();
