/**
 * CustomerModule.js
 * Responsibility: Handle persistent storage and retrieval of customer data.
 */
export const CustomerModule = {
  getCustomers() {
    try {
      const data = localStorage.getItem('mall_billing_customers');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  saveCustomer(name, number) {
    if (!name || !number) return;
    const customers = this.getCustomers();
    // Only update if it doesn't exist or if the name changed
    customers[number] = { name, number, lastVisited: new Date().toISOString() };
    localStorage.setItem('mall_billing_customers', JSON.stringify(customers));
  },

  getCustomerByNumber(number) {
    if (!number) return null;
    const customers = this.getCustomers();
    return customers[number] || null;
  }
};
