/**
 * BillingModule.js
 * Responsibility: Calculate the final total including discounts and taxes.
 */
export const BillingModule = {
  calculateFinalTotal(subtotal, gst, discountPercent = 0) {
    const discountAmount = subtotal * (discountPercent / 100);
    const finalTotal = subtotal - discountAmount + gst;
    return {
      discountAmount,
      finalTotal
    };
  }
};
