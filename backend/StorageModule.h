#ifndef STORAGE_MODULE_H
#define STORAGE_MODULE_H

#include <vector>
#include <string>
#include "Product.h"

class StorageModule {
public:
    StorageModule();
    std::vector<Product> getProducts() const;
    void addProduct(const Product& product);
    Product* getProductById(int id);

private:
    std::vector<Product> products;
};

#endif // STORAGE_MODULE_H
