/**
 * Explicit Binding: Call, Apply, and Bind
 */
function introduce(city) {
  console.log(`I am ${this.name} from ${city}`);
}

const user = { name: "Najio" };

// .call() passes arguments individually
introduce.call(user, "Hargeisa");

// .apply() passes arguments as an array
introduce.apply(user, ["Hargeisa"]);

// .bind() returns a new function to be called later
const bound = introduce.bind(user);
bound("Hargeisa");
