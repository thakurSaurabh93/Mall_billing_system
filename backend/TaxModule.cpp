#include "TaxModule.h"

double TaxModule::calculateGST(double subtotal) {
    return subtotal * 0.18; // 18% GST
}

double TaxModule::getTaxRate() {
    return 18.0;
}
