#include "InvoiceModule.h"
#include <ctime>
#include <sstream>
#include <iomanip>

Invoice InvoiceModule::generateInvoice(const std::string& customerName, 
                                     const std::vector<CartItem>& cartItems, 
                                     double subtotal, double gst, double discount, double total) {
    time_t now = time(0);
    tm *ltm = localtime(&now);
    
    std::stringstream ss_num, ss_date;
    ss_num << "INV-" << now;
    ss_date << std::put_time(ltm, "%d/%m/%Y");

    return {
        ss_num.str(),
        ss_date.str(),
        customerName,
        cartItems,
        {subtotal, gst, discount, total}
    };
}
