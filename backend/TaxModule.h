#ifndef TAX_MODULE_H
#define TAX_MODULE_H

class TaxModule {
public:
    static double calculateGST(double subtotal);
    static double getTaxRate();
};

#endif // TAX_MODULE_H
