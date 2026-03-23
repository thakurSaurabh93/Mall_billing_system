/**
 * StorageModule.js
 * Responsibility: Handle persistent storage of product data.
 */
export const StorageModule = {
  products: [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 25, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 45, category: 'Electronics' },
    { id: 4, name: 'Coffee Mug', price: 12, category: 'Lifestyle' }
  ],

  getProducts() {
    return this.products;
  },

  addProduct(product) {
    const newProduct = { ...product, id: Date.now() };
    this.products.push(newProduct);
    return newProduct;
  }
};
