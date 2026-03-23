/**
 * CartModule.js
 * Responsibility: Manage the items currently in the cart.
 */
export const CartModule = {
  cartItems: [],

  addItem(product, quantity = 1) {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += Number(quantity);
    } else {
      this.cartItems.push({ ...product, quantity: Number(quantity) });
    }
    return this.cartItems;
  },

  updateQuantity(productId, quantity) {
    const item = this.cartItems.find(i => i.id === productId);
    if (item) {
      item.quantity = Number(quantity);
    }
    return this.cartItems;
  },

  removeItem(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    return this.cartItems;
  },

  getCartItems() {
    return this.cartItems;
  },

  calculateSubtotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  clearCart() {
    this.cartItems = [];
  }
};
