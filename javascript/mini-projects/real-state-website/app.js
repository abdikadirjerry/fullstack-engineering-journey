"use strict";

// ===== DOM ELEMENTS =====

const propertyList = document.querySelector("#property-list");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

// ===== PROPERTY DATA =====

const properties = [
  {
    id: 1,
    title: "Modern Family Villa",
    location: "Hargeisa, Somaliland",
    type: "Villa",
    price: 185000,
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    location: "Hargeisa, Somaliland",
    type: "Apartment",
    price: 95000,
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Contemporary Beach House",
    location: "Berbera, Somaliland",
    type: "House",
    price: 240000,
    bedrooms: 5,
    bathrooms: 4,
    area: 340,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Cozy Family Home",
    location: "Hargeisa, Somaliland",
    type: "House",
    price: 125000,
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Elegant Modern Villa",
    location: "Burao, Somaliland",
    type: "Villa",
    price: 210000,
    bedrooms: 5,
    bathrooms: 4,
    area: 315,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Downtown Apartment",
    location: "Hargeisa, Somaliland",
    type: "Apartment",
    price: 78000,
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
];

// ===== FORMAT PRICE =====

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

// ===== CREATE PROPERTY CARD =====

function createPropertyCard(property) {
  return `
    <article class="property-card">
      <img
        class="property-image"
        src="${property.image}"
        alt="${property.title}"
      >

      <div class="property-content">
        <span class="property-type">
          ${property.type}
        </span>

        <h3>${property.title}</h3>

        <p class="property-location">
          ${property.location}
        </p>

        <div class="property-details">
          <span>${property.bedrooms} Beds</span>
          <span>${property.bathrooms} Baths</span>
          <span>${property.area} m²</span>
        </div>

        <p class="property-price">
          ${formatPrice(property.price)}
        </p>
      </div>
    </article>
  `;
}

// ===== RENDER PROPERTIES =====

function renderProperties(propertyData) {
  propertyList.innerHTML = propertyData.map(createPropertyCard).join("");
}

// ===== MOBILE NAVIGATION =====

function toggleMobileMenu() {
  const isOpen = mainNav.classList.toggle("active");

  document.body.classList.toggle("menu-open", isOpen);

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
}

function closeMobileMenu() {
  mainNav.classList.remove("active");
  document.body.classList.remove("menu-open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

// ===== EVENTS =====

menuToggle.addEventListener("click", toggleMobileMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// ===== INITIALIZE APP =====

renderProperties(properties);

console.log("EstateHub is running!");
console.log(`Loaded ${properties.length} properties.`);
