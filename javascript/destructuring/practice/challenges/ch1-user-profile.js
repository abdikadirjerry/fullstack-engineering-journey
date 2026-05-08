const user = {
  id: 1,
  name: "Najio",
  address: {
    city: "Hargeisa",
    country: "Somalia",
  },
};

// ❓ Destructure all properties including nested values
const {
  id,
  name,
  address: { city, country },
} = user;

console.log(`User ID ${id}: ${name} lives in ${city}, ${country}`);
