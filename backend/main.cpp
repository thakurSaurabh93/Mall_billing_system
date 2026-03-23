#include <iostream>
#include <iomanip>
#include "StorageModule.h"
#include "CartModule.h"
#include "TaxModule.h"
#include "BillingModule.h"
#include "InvoiceModule.h"

int main() {
    std::cout << "--- Mall Billing System Backend Engine ---" << std::endl;

    // 1. Initialize Storage
    StorageModule storage;
    auto products = storage.getProducts();

    // 2. Initialize Cart
    CartModule cart;
    std::cout << "\nAdding items to cart..." << std::endl;
    cart.addItem(products[0], 1); // Laptop
    cart.addItem(products[1], 2); // Mouse

    // 3. Calculate Totals
    double subtotal = cart.calculateSubtotal();
    double gst = TaxModule::calculateGST(subtotal);
    
    // 4. Billing (with 10% discount)
    BillingResult result = BillingModule::calculateFinalTotal(subtotal, gst, 10.0);

    // 5. Generate Invoice
    Invoice invoice = InvoiceModule::generateInvoice("John Doe", cart.getItems(), 
                                                   subtotal, gst, result.discountAmount, result.finalTotal);

    // 6. Display Invoice Summary
    std::cout << "\n--- INVOICE GENERATED ---" << std::endl;
    std::cout << "Invoice No: " << invoice.invoiceNumber << std::endl;
    std::cout << "Customer:   " << invoice.customerName << std::endl;
    std::cout << "Date:       " << invoice.date << std::endl;
    std::cout << "-----------------------------------" << std::endl;
    for (const auto& item : invoice.items) {
        std::cout << std::left << std::setw(15) << item.product.name 
                  << " x" << item.quantity 
                  << "  $" << item.total << std::endl;
    }
    std::cout << "-----------------------------------" << std::endl;
    std::cout << "Subtotal:   $" << invoice.summary.subtotal << std::endl;
    std::cout << "GST (18%):  $" << invoice.summary.gst << std::endl;
    std::cout << "Discount:  -$" << invoice.summary.discount << std::endl;
    std::cout << "TOTAL:      $" << invoice.summary.total << std::endl;
    std::cout << "-----------------------------------" << std::endl;

    return 0;
}
