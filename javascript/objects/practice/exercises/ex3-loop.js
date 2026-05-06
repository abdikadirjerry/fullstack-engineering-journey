/**
 * EXERCISE 3: The Loop
 * ❓ Use Object.entries() or a for...in loop to print
 * every property in the 'laptop' object.
 */

const laptop = { brand: "Apple", model: "M2", ram: "16GB" };

/**
 * EXERCISE 3: The Loop
 * Task: Loop through the object and print keys and values.
 */

const laptop = { brand: "Apple", model: "M2", ram: "16GB" };

console.log("--- Laptop Specifications ---");

// Using for...in loop
for (let key in laptop) {
  console.log(`${key.toUpperCase()}: ${laptop[key]}`);
}
