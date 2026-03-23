#include "CartModule.h"

void CartModule::addItem(const Product& product, int quantity) {
    for (auto& item : items) {
        if (item.product.id == product.id) {
            item.quantity += quantity;
            item.total = item.product.price * item.quantity;
            return;
        }
    }
    items.push_back({product, quantity, product.price * quantity});
}

void CartModule::updateQuantity(int productId, int quantity) {
    for (auto& item : items) {
        if (item.product.id == productId) {
            item.quantity = quantity;
            item.total = item.product.price * item.quantity;
            return;
        }
    }
}

void CartModule::removeItem(int productId) {
    for (auto it = items.begin(); it != items.end(); ++it) {
        if (it->product.id == productId) {
            items.erase(it);
            return;
        }
    }
}

std::vector<CartItem> CartModule::getItems() const {
    return items;
}

double CartModule::calculateSubtotal() const {
    double subtotal = 0;
    for (const auto& item : items) {
        subtotal += item.total;
    }
    return subtotal;
}

void CartModule::clear() {
    items.clear();
}
