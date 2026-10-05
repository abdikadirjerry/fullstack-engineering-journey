"use strict";

// ===== DOM ELEMENTS =====

const propertyList = document.querySelector("#property-list");
const propertyCount = document.querySelector("#property-count");
const searchInput = document.querySelector("#search-input");
const noResults = document.querySelector("#no-results");

const minPriceInput = document.querySelector("#min-price");
const maxPriceInput = document.querySelector("#max-price");

const sortSelect = document.querySelector("#sort-select");

const filterButtons = document.querySelectorAll(".filter-button");

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

// ===== MODAL ELEMENTS =====

const propertyModal = document.querySelector("#property-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector("#modal-close");

const modalImage = document.querySelector("#modal-image");
const modalType = document.querySelector("#modal-type");
const modalTitle = document.querySelector("#modal-title");
const modalLocation = document.querySelector("#modal-location");
const modalDescription = document.querySelector("#modal-description");
const modalBedrooms = document.querySelector("#modal-bedrooms");
const modalBathrooms = document.querySelector("#modal-bathrooms");
const modalArea = document.querySelector("#modal-area");
const modalPrice = document.querySelector("#modal-price");

// ===== APPLICATION STATE =====

let selectedPropertyType = "all";
let minimumPrice = 0;
let maximumPrice = Infinity;
let selectedSort = "default";

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
    description:
      "A spacious modern villa designed for comfortable family living, with generous bedrooms, contemporary interiors, and plenty of outdoor space.",
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
    description:
      "A stylish city apartment offering comfortable living spaces, modern finishes, and convenient access to the heart of Hargeisa.",
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
    description:
      "A beautiful contemporary beach house with large living spaces and an ideal location for relaxing near the coast.",
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
    description:
      "A comfortable family home with a practical layout, three bedrooms, and a welcoming atmosphere.",
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
    description:
      "An elegant modern villa featuring spacious rooms, contemporary architecture, and premium family living spaces.",
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
    description:
      "A practical downtown apartment that combines comfortable living with a convenient central location.",
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

        <button
          class="details-button"
          type="button"
          data-property-id="${property.id}"
        >
          View Details
        </button>
      </div>
    </article>
  `;
}

// ===== SORT PROPERTIES =====

function sortProperties(propertyData) {
  const sortedProperties = [...propertyData];

  if (selectedSort === "price-low") {
    sortedProperties.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === "price-high") {
    sortedProperties.sort((a, b) => b.price - a.price);
  }

  if (selectedSort === "name-az") {
    sortedProperties.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (selectedSort === "name-za") {
    sortedProperties.sort((a, b) => b.title.localeCompare(a.title));
  }

  return sortedProperties;
}

// ===== RENDER PROPERTIES =====

function renderProperties(propertyData) {
  const sortedProperties = sortProperties(propertyData);

  propertyList.innerHTML = sortedProperties.map(createPropertyCard).join("");

  propertyCount.textContent = `${sortedProperties.length} ${
    sortedProperties.length === 1 ? "property" : "properties"
  } found`;

  noResults.hidden = sortedProperties.length !== 0;
}

// ===== FILTER PROPERTIES =====

function filterProperties() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = `
      ${property.title}
      ${property.location}
      ${property.type}
    `
      .toLowerCase()
      .includes(searchTerm);

    const matchesType =
      selectedPropertyType === "all" ||
      property.type.toLowerCase() === selectedPropertyType;

    const matchesPrice =
      property.price >= minimumPrice && property.price <= maximumPrice;

    return matchesSearch && matchesType && matchesPrice;
  });

  renderProperties(filteredProperties);
}

// ===== HANDLE TYPE FILTER =====

function handleTypeFilter(event) {
  const clickedButton = event.currentTarget;

  selectedPropertyType = clickedButton.dataset.type;

  filterButtons.forEach((button) => {
    button.classList.remove("active");
  });

  clickedButton.classList.add("active");

  filterProperties();
}

// ===== HANDLE PRICE FILTER =====

function handlePriceFilter() {
  minimumPrice = Number(minPriceInput.value) || 0;
  maximumPrice = Number(maxPriceInput.value) || Infinity;

  filterProperties();
}

// ===== HANDLE SORTING =====

function handleSort() {
  selectedSort = sortSelect.value;

  filterProperties();
}

// ===== OPEN PROPERTY MODAL =====

function openPropertyModal(propertyId) {
  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    return;
  }

  modalImage.src = property.image;
  modalImage.alt = property.title;

  modalType.textContent = property.type;
  modalTitle.textContent = property.title;
  modalLocation.textContent = property.location;
  modalDescription.textContent = property.description;

  modalBedrooms.textContent = property.bedrooms;
  modalBathrooms.textContent = property.bathrooms;
  modalArea.textContent = `${property.area} m²`;

  modalPrice.textContent = formatPrice(property.price);

  propertyModal.hidden = false;
  document.body.classList.add("menu-open");

  modalClose.focus();
}

// ===== CLOSE PROPERTY MODAL =====

function closePropertyModal() {
  propertyModal.hidden = true;
  document.body.classList.remove("menu-open");
}

// ===== HANDLE PROPERTY DETAILS CLICK =====

function handlePropertyClick(event) {
  const detailsButton = event.target.closest(".details-button");

  if (!detailsButton) {
    return;
  }

  const propertyId = Number(detailsButton.dataset.propertyId);

  openPropertyModal(propertyId);
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

searchInput.addEventListener("input", filterProperties);

filterButtons.forEach((button) => {
  button.addEventListener("click", handleTypeFilter);
});

minPriceInput.addEventListener("input", handlePriceFilter);
maxPriceInput.addEventListener("input", handlePriceFilter);

sortSelect.addEventListener("change", handleSort);

propertyList.addEventListener("click", handlePropertyClick);

modalClose.addEventListener("click", closePropertyModal);

modalOverlay.addEventListener("click", closePropertyModal);

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !propertyModal.hidden) {
    closePropertyModal();
  }
});

// ===== INITIALIZE APP =====

renderProperties(properties);

console.log("EstateHub is running!");
console.log(`Loaded ${properties.length} properties.`);
