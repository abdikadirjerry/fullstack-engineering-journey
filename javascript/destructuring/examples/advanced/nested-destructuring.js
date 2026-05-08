const user = {
  name: "Najio",
  address: {
    city: "Hargeisa",
    country: "Somalia",
  },
};

// Deeply extracting values in one line
const {
  address: { city, country },
} = user;

console.log(`Location: ${city}, ${country}`);
