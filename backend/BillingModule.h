#ifndef BILLING_MODULE_H
#define BILLING_MODULE_H

struct BillingResult {
    double discountAmount;
    double finalTotal;
};

class BillingModule {
public:
    static BillingResult calculateFinalTotal(double subtotal, double gst, double discountPercent);
};

#endif // BILLING_MODULE_H
