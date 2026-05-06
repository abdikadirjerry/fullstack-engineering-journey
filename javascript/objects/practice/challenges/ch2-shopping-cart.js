/**
 * CHALLENGE 2: Shopping Cart
 * Task: Implement a functional shopping cart with item tracking and total calculation.
 */

const cart = {
  items: [],

  /**
   * Adds an item to the cart
   * @param {string} name - Name of the product
   * @param {number} price - Price of the product
   */
  addItem(name, price) {
    const newItem = { name, price };
    this.items.push(newItem);
    console.log(`Added: ${name} - $${price}`);
  },

  /**
   * Calculates the sum of all item prices
   * @returns {number}
   */
  getTotal() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
  },

  /**
   * Displays all items currently in the cart
   */
  displayCart() {
    console.log("--- Current Cart Items ---");
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} ($${item.price})`);
    });
    console.log(`Total: $${this.getTotal()}`);
  },
};

// Testing with items
cart.addItem("MacBook Pro", 1999.99);
cart.addItem("Mechanical Keyboard", 150.0);
cart.addItem("Magic Mouse", 79.0);

cart.displayCart();
