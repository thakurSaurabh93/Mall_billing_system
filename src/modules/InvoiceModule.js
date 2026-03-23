/**
 * InvoiceModule.js
 * Responsibility: Format the data for a professional invoice.
 */
export const InvoiceModule = {
  generateInvoice(customerName, cartItems, subtotal, gst, discount, total) {
    return {
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      customerName,
      items: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
      })),
      summary: {
        subtotal,
        gst,
        discount,
        total
      }
    };
  }
};
