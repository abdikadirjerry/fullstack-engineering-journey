"use strict";

// ===== DOM ELEMENTS =====

const propertyList = document.querySelector("#property-list");
const propertyCount = document.querySelector("#property-count");

const searchInput = document.querySelector("#search-input");
const clearSearchButton = document.querySelector("#clear-search-button");

const minPriceInput = document.querySelector("#min-price");

const maxPriceInput = document.querySelector("#max-price");

const priceError = document.querySelector("#price-error");

const sortSelect = document.querySelector("#sort-select");

const filterButtons = document.querySelectorAll(".filter-button");

const favoritesButton = document.querySelector("#favorites-button");

const resetFiltersButton = document.querySelector("#reset-filters-button");

const emptyState = document.querySelector("#empty-state");

const emptyStateTitle = document.querySelector("#empty-state-title");

const emptyStateMessage = document.querySelector("#empty-state-message");

const emptyStateButton = document.querySelector("#empty-state-button");

const loadingState = document.querySelector("#loading-state");

const menuToggle = document.querySelector(".menu-toggle");

const mainNav = document.querySelector(".main-nav");

const navLinks = document.querySelectorAll(".main-nav a");

// ===== CONTACT FORM =====

const contactForm = document.querySelector("#contact-form");

const fullNameInput = document.querySelector("#full-name");

const emailInput = document.querySelector("#email");

const phoneInput = document.querySelector("#phone");

const propertySelect = document.querySelector("#property-select");

const messageInput = document.querySelector("#message");

const formSubmit = document.querySelector("#form-submit");

const submitText = document.querySelector(".submit-text");

const submitLoading = document.querySelector(".submit-loading");

const formSuccess = document.querySelector("#form-success");

// ===== MODAL =====

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

const currentYear = document.querySelector("#current-year");

// ===== APPLICATION STATE =====

let selectedPropertyType = "all";
let minimumPrice = 0;
let maximumPrice = Infinity;
let selectedSort = "default";
let showFavoritesOnly = false;

const favoritePropertyIds = new Set();

const FAVORITES_STORAGE_KEY = "estatehub-favorites";

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

// ===== LOCAL STORAGE =====

function loadFavorites() {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

  if (!savedFavorites) {
    return;
  }

  try {
    const parsedFavorites = JSON.parse(savedFavorites);

    if (!Array.isArray(parsedFavorites)) {
      return;
    }

    parsedFavorites.forEach((propertyId) => {
      const numericId = Number(propertyId);

      const propertyExists = properties.some(
        (property) => property.id === numericId,
      );

      if (propertyExists) {
        favoritePropertyIds.add(numericId);
      }
    });
  } catch (error) {
    console.error("Could not load favorites:", error);
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify([...favoritePropertyIds]),
    );
  } catch (error) {
    console.error("Could not save favorites:", error);
  }
}

// ===== HELPERS =====

function normalizeSearchText(value) {
  return String(value).trim().toLowerCase();
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getSearchablePropertyText(property) {
  return [
    property.title,
    property.location,
    property.type,
    property.price,
    property.bedrooms,
    property.bathrooms,
    property.area,
    property.description,
  ]
    .join(" ")
    .toLowerCase();
}

// ===== SEARCH =====

function updateSearchUI() {
  clearSearchButton.hidden = searchInput.value.trim() === "";
}

function handleSearch() {
  updateSearchUI();
  filterProperties();
}

function clearSearch() {
  searchInput.value = "";

  updateSearchUI();
  filterProperties();

  searchInput.focus();
}

// ===== PROPERTY CARD =====

function createPropertyCard(property) {
  const isFavorite = favoritePropertyIds.has(property.id);

  return `
    <article class="property-card">

      <img
        class="property-image"
        src="${property.image}"
        alt="${property.title}"
        loading="lazy"
      >

      <button
        class="favorite-button ${isFavorite ? "active" : ""}"
        type="button"
        data-property-id="${property.id}"
        aria-label="${
          isFavorite
            ? `Remove ${property.title} from favorites`
            : `Add ${property.title} to favorites`
        }"
        aria-pressed="${isFavorite}"
      >
        ${isFavorite ? "♥" : "♡"}
      </button>

      <div class="property-content">

        <span class="property-type">
          ${property.type}
        </span>

        <h3>
          ${property.title}
        </h3>

        <p class="property-location">
          ${property.location}
        </p>

        <div class="property-details">

          <span>
            ${property.bedrooms} Beds
          </span>

          <span>
            ${property.bathrooms} Baths
          </span>

          <span>
            ${property.area} m²
          </span>

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

// ===== SORTING =====

function sortProperties(propertyData) {
  const sortedProperties = [...propertyData];

  switch (selectedSort) {
    case "price-low":
      sortedProperties.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      sortedProperties.sort((a, b) => b.price - a.price);
      break;

    case "name-az":
      sortedProperties.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "name-za":
      sortedProperties.sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      break;
  }

  return sortedProperties;
}

// ===== UI STATES =====

function showLoadingState() {
  loadingState.hidden = false;
  propertyList.hidden = true;
  emptyState.hidden = true;
}

function hideLoadingState() {
  loadingState.hidden = true;
  propertyList.hidden = false;
}

function updateEmptyState() {
  if (showFavoritesOnly) {
    emptyStateTitle.textContent = "No favorite properties yet";

    emptyStateMessage.textContent =
      "Save properties you like and they will appear here.";

    emptyStateButton.textContent = "Show All Properties";

    return;
  }

  emptyStateTitle.textContent = "No properties found";

  emptyStateMessage.textContent = "Try changing your search or filters.";

  emptyStateButton.textContent = "Reset Filters";
}

// ===== RENDER =====

function renderProperties(propertyData) {
  const sortedProperties = sortProperties(propertyData);

  hideLoadingState();

  propertyList.innerHTML = sortedProperties.map(createPropertyCard).join("");

  propertyCount.textContent = `${sortedProperties.length} ${
    sortedProperties.length === 1 ? "property" : "properties"
  } found`;

  if (sortedProperties.length === 0) {
    updateEmptyState();
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }
}

// ===== PRICE VALIDATION =====

function validatePriceRange() {
  const minValue = minPriceInput.value.trim();

  const maxValue = maxPriceInput.value.trim();

  const minimum = Number(minValue);
  const maximum = Number(maxValue);

  minPriceInput.classList.remove("input-error");

  maxPriceInput.classList.remove("input-error");

  if (minValue !== "" && maxValue !== "" && minimum > maximum) {
    priceError.textContent =
      "Minimum price cannot be greater than maximum price.";

    priceError.hidden = false;

    minPriceInput.classList.add("input-error");

    maxPriceInput.classList.add("input-error");

    return false;
  }

  priceError.textContent = "";
  priceError.hidden = true;

  return true;
}

// ===== FILTERING =====

function filterProperties() {
  if (!validatePriceRange()) {
    propertyList.innerHTML = "";
    propertyList.hidden = true;
    emptyState.hidden = true;

    propertyCount.textContent = "Please correct the price range.";

    return;
  }

  minimumPrice = Number(minPriceInput.value) || 0;

  maximumPrice =
    maxPriceInput.value.trim() === "" ? Infinity : Number(maxPriceInput.value);

  const searchTerm = normalizeSearchText(searchInput.value);

  const filteredProperties = properties.filter((property) => {
    const searchableText = getSearchablePropertyText(property);

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesType =
      selectedPropertyType === "all" ||
      property.type.toLowerCase() === selectedPropertyType;

    const matchesPrice =
      property.price >= minimumPrice && property.price <= maximumPrice;

    const matchesFavorite =
      !showFavoritesOnly || favoritePropertyIds.has(property.id);

    return matchesSearch && matchesType && matchesPrice && matchesFavorite;
  });

  renderProperties(filteredProperties);
}

// ===== TYPE FILTER =====

function handleTypeFilter(event) {
  const clickedButton = event.currentTarget;

  selectedPropertyType = clickedButton.dataset.type;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button === clickedButton);
  });

  filterProperties();
}

// ===== PRICE FILTER =====

function handlePriceFilter() {
  filterProperties();
}

// ===== SORT =====

function handleSort() {
  selectedSort = sortSelect.value;

  filterProperties();
}

// ===== FAVORITES =====

function toggleFavorite(propertyId) {
  if (favoritePropertyIds.has(propertyId)) {
    favoritePropertyIds.delete(propertyId);
  } else {
    favoritePropertyIds.add(propertyId);
  }

  saveFavorites();
  filterProperties();
}

function handleFavoriteClick(event) {
  const favoriteButton = event.target.closest(".favorite-button");

  if (!favoriteButton) {
    return;
  }

  const propertyId = Number(favoriteButton.dataset.propertyId);

  toggleFavorite(propertyId);
}

function handleFavoritesFilter() {
  showFavoritesOnly = !showFavoritesOnly;

  favoritesButton.classList.toggle("active", showFavoritesOnly);

  favoritesButton.setAttribute("aria-pressed", showFavoritesOnly);

  favoritesButton.textContent = showFavoritesOnly
    ? "♥ Showing Favorites"
    : "♥ Show Favorites";

  filterProperties();
}

// ===== RESET FILTERS =====

function resetFilters() {
  searchInput.value = "";

  minPriceInput.value = "";
  maxPriceInput.value = "";

  selectedPropertyType = "all";
  selectedSort = "default";
  showFavoritesOnly = false;

  sortSelect.value = "default";

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === "all");
  });

  favoritesButton.classList.remove("active");

  favoritesButton.setAttribute("aria-pressed", "false");

  favoritesButton.textContent = "♥ Show Favorites";

  minPriceInput.classList.remove("input-error");

  maxPriceInput.classList.remove("input-error");

  priceError.textContent = "";
  priceError.hidden = true;

  updateSearchUI();
  filterProperties();
}

function handleEmptyStateButton() {
  if (showFavoritesOnly) {
    showFavoritesOnly = false;

    favoritesButton.classList.remove("active");

    favoritesButton.setAttribute("aria-pressed", "false");

    favoritesButton.textContent = "♥ Show Favorites";

    filterProperties();

    return;
  }

  resetFilters();
}

// ===== CONTACT FORM =====

function populatePropertySelect() {
  properties.forEach((property) => {
    const option = document.createElement("option");

    option.value = property.id;

    option.textContent = `${property.title} — ${formatPrice(property.price)}`;

    propertySelect.appendChild(option);
  });
}

function showFieldError(input, errorElement, message) {
  input.classList.add("input-error");

  input.setAttribute("aria-invalid", "true");

  errorElement.textContent = message;

  errorElement.hidden = false;
}

function clearFieldError(input, errorElement) {
  input.classList.remove("input-error");

  input.setAttribute("aria-invalid", "false");

  errorElement.textContent = "";

  errorElement.hidden = true;
}

function validateName() {
  const errorElement = document.querySelector("#full-name-error");

  const value = fullNameInput.value.trim();

  if (!value) {
    showFieldError(fullNameInput, errorElement, "Please enter your full name.");

    return false;
  }

  if (value.length < 2) {
    showFieldError(
      fullNameInput,
      errorElement,
      "Name must contain at least 2 characters.",
    );

    return false;
  }

  clearFieldError(fullNameInput, errorElement);

  return true;
}

function validateEmail() {
  const errorElement = document.querySelector("#email-error");

  const value = emailInput.value.trim();

  if (!value) {
    showFieldError(
      emailInput,
      errorElement,
      "Please enter your email address.",
    );

    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    showFieldError(
      emailInput,
      errorElement,
      "Please enter a valid email address.",
    );

    return false;
  }

  clearFieldError(emailInput, errorElement);

  return true;
}

function validatePhone() {
  const errorElement = document.querySelector("#phone-error");

  const value = phoneInput.value.trim();

  if (!value) {
    showFieldError(phoneInput, errorElement, "Please enter your phone number.");

    return false;
  }

  const phonePattern = /^[+]?[0-9\s()-]{7,20}$/;

  if (!phonePattern.test(value)) {
    showFieldError(
      phoneInput,
      errorElement,
      "Please enter a valid phone number.",
    );

    return false;
  }

  clearFieldError(phoneInput, errorElement);

  return true;
}

function validateProperty() {
  const errorElement = document.querySelector("#property-error");

  if (!propertySelect.value) {
    showFieldError(propertySelect, errorElement, "Please select a property.");

    return false;
  }

  clearFieldError(propertySelect, errorElement);

  return true;
}

function validateMessage() {
  const errorElement = document.querySelector("#message-error");

  const value = messageInput.value.trim();

  if (!value) {
    showFieldError(messageInput, errorElement, "Please enter your message.");

    return false;
  }

  if (value.length < 10) {
    showFieldError(
      messageInput,
      errorElement,
      "Message must contain at least 10 characters.",
    );

    return false;
  }

  clearFieldError(messageInput, errorElement);

  return true;
}

function validateForm() {
  return (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateProperty() &&
    validateMessage()
  );
}

function setFormLoading(isLoading) {
  formSubmit.disabled = isLoading;

  formSubmit.classList.toggle("is-loading", isLoading);

  submitText.hidden = isLoading;

  submitLoading.hidden = !isLoading;
}

function handleContactSubmit(event) {
  event.preventDefault();

  formSuccess.hidden = true;

  if (!validateForm()) {
    return;
  }

  setFormLoading(true);

  setTimeout(() => {
    formSuccess.hidden = false;

    contactForm.reset();

    setFormLoading(false);

    fullNameInput.focus();

    setTimeout(() => {
      formSuccess.hidden = true;
    }, 5000);
  }, 1000);
}

function handleFieldInput(input, validationFunction) {
  input.addEventListener("input", validationFunction);
}

// ===== MODAL =====

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

function closePropertyModal() {
  propertyModal.hidden = true;

  document.body.classList.remove("menu-open");
}

function handlePropertyClick(event) {
  const detailsButton = event.target.closest(".details-button");

  if (detailsButton) {
    const propertyId = Number(detailsButton.dataset.propertyId);

    openPropertyModal(propertyId);

    return;
  }

  handleFavoriteClick(event);
}

// ===== IMAGE ERROR HANDLING =====

function handleImageError(event) {
  const image = event.target;

  if (image.dataset.fallbackApplied) {
    return;
  }

  image.dataset.fallbackApplied = "true";

  image.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="900"
        height="600"
        viewBox="0 0 900 600"
      >
        <rect
          width="900"
          height="600"
          fill="#f1f6f2"
        />
        <text
          x="450"
          y="300"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="Arial"
          font-size="28"
          fill="#69756d"
        >
          Image unavailable
        </text>
      </svg>
    `);
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

searchInput.addEventListener("input", handleSearch);

clearSearchButton.addEventListener("click", clearSearch);

filterButtons.forEach((button) => {
  button.addEventListener("click", handleTypeFilter);
});

minPriceInput.addEventListener("input", handlePriceFilter);

maxPriceInput.addEventListener("input", handlePriceFilter);

sortSelect.addEventListener("change", handleSort);

favoritesButton.addEventListener("click", handleFavoritesFilter);

resetFiltersButton.addEventListener("click", resetFilters);

emptyStateButton.addEventListener("click", handleEmptyStateButton);

propertyList.addEventListener("click", handlePropertyClick);

propertyList.addEventListener("error", handleImageError, true);

modalImage.addEventListener("error", handleImageError);

contactForm.addEventListener("submit", handleContactSubmit);

handleFieldInput(fullNameInput, validateName);

handleFieldInput(emailInput, validateEmail);

handleFieldInput(phoneInput, validatePhone);

propertySelect.addEventListener("change", validateProperty);

modalClose.addEventListener("click", closePropertyModal);

modalOverlay.addEventListener("click", closePropertyModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !propertyModal.hidden) {
    closePropertyModal();
  }

  if (event.key === "Escape" && mainNav.classList.contains("active")) {
    closeMobileMenu();
  }
});

// ===== INITIALIZE =====

function initializeApp() {
  currentYear.textContent = new Date().getFullYear();

  showLoadingState();

  loadFavorites();

  populatePropertySelect();

  updateSearchUI();

  setTimeout(() => {
    renderProperties(properties);
  }, 600);
}

initializeApp();
