/**
 * TaxModule.js
 * Responsibility: Calculate applicable taxes.
 */
const GST_RATE = 0.18; // 18% GST

export const TaxModule = {
  calculateGST(subtotal) {
    return subtotal * GST_RATE;
  },

  getTaxRate() {
    return GST_RATE * 100;
  }
};
