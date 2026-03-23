#ifndef CART_MODULE_H
#define CART_MODULE_H

#include <vector>
#include "Product.h"

struct CartItem {
    Product product;
    int quantity;
    double total;
};

class CartModule {
public:
    void addItem(const Product& product, int quantity);
    void updateQuantity(int productId, int quantity);
    void removeItem(int productId);
    std::vector<CartItem> getItems() const;
    double calculateSubtotal() const;
    void clear();

private:
    std::vector<CartItem> items;
};

#endif // CART_MODULE_H
