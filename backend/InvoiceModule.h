#ifndef INVOICE_MODULE_H
#define INVOICE_MODULE_H

#include <string>
#include <vector>
#include "CartModule.h"

struct Summary {
    double subtotal;
    double gst;
    double discount;
    double total;
};

struct Invoice {
    std::string invoiceNumber;
    std::string date;
    std::string customerName;
    std::vector<CartItem> items;
    Summary summary;
};

class InvoiceModule {
public:
    static Invoice generateInvoice(const std::string& customerName, 
                                 const std::vector<CartItem>& items, 
                                 double subtotal, double gst, double discount, double total);
};

#endif // INVOICE_MODULE_H
