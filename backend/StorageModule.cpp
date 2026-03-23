#include "StorageModule.h"

StorageModule::StorageModule() {
    products = {
        {1, "Laptop", 1200.0, 10, "Electronics"},
        {2, "Mouse", 25.0, 50, "Electronics"},
        {3, "Keyboard", 45.0, 30, "Electronics"},
        {4, "Coffee Mug", 12.0, 100, "Lifestyle"}
    };
}

std::vector<Product> StorageModule::getProducts() const {
    return products;
}

void StorageModule::addProduct(const Product& product) {
    products.push_back(product);
}

Product* StorageModule::getProductById(int id) {
    for (auto& p : products) {
        if (p.id == id) return &p;
    }
    return nullptr;
}
