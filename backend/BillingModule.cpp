#include "BillingModule.h"

BillingResult BillingModule::calculateFinalTotal(double subtotal, double gst, double discountPercent) {
    double discountAmount = subtotal * (discountPercent / 100.0);
    double finalTotal = subtotal - discountAmount + gst;
    return {discountAmount, finalTotal};
}
