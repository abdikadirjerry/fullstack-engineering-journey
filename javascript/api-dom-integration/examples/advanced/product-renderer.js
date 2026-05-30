// ======================================
// PRODUCT RENDERER
// ======================================

const productsContainer = document.getElementById("products");

async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const products = await response.json();

    products.slice(0, 5).forEach((product) => {
      productsContainer.innerHTML += `
        <div>
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <p>${product.category}</p>
        </div>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

loadProducts();
