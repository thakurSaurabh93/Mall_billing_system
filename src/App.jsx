import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import AddProduct from './views/AddProduct';
import CartScreen from './views/CartScreen';
import Checkout from './views/Checkout';
import InvoiceView from './views/InvoiceView';

import { StorageModule } from './modules/StorageModule';
import { CartModule } from './modules/CartModule';
import { InvoiceModule } from './modules/InvoiceModule';
import { CustomerModule } from './modules/CustomerModule';

function App() {
  const [currentView, setView] = useState('dashboard');
  const [products, setProducts] = useState(StorageModule.getProducts());
  const [cartItems, setCartItems] = useState(CartModule.getCartItems());
  const [currentInvoice, setCurrentInvoice] = useState(null);

  // Sync state with modules (simple approach)
  const handleAddProduct = (newProduct) => {
    const product = StorageModule.addProduct(newProduct);
    setProducts([...StorageModule.getProducts()]);
    CartModule.addItem(product, product.quantity);
    setCartItems([...CartModule.getCartItems()]);
  };

  const handleUpdateQuantity = (id, q) => {
    CartModule.updateQuantity(id, q);
    setCartItems([...CartModule.getCartItems()]);
  };

  const handleRemoveItem = (id) => {
    CartModule.removeItem(id);
    setCartItems([...CartModule.getCartItems()]);
  };

  const handleConfirmOrder = ({ customerName, customerNumber, subtotal, gst, discount, total }) => {
    CustomerModule.saveCustomer(customerName, customerNumber);
    const invoice = InvoiceModule.generateInvoice(
      customerName,
      customerNumber,
      cartItems,
      subtotal,
      gst,
      discount,
      total
    );
    setCurrentInvoice(invoice);
    CartModule.clearCart();
    setCartItems([]);
    setView('invoice');
  };

  const handleProceedToCheckout = () => {
    setView('checkout');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard productsCount={products.length} cartItemsCount={cartItems.length} />;
      case 'add-product':
        return <AddProduct onAddProduct={handleAddProduct} />;
      case 'cart':
        return (
          <CartScreen 
            cartItems={cartItems} 
            onUpdateQuantity={handleUpdateQuantity} 
            onRemoveItem={handleRemoveItem}
            onProceedToCheckout={handleProceedToCheckout}
          />
        );
      case 'checkout':
        return (
          <Checkout 
            subtotal={CartModule.calculateSubtotal()} 
            onConfirmOrder={handleConfirmOrder} 
          />
        );
      case 'invoice':
        return <InvoiceView invoiceData={currentInvoice} />;
      default:
        return <Dashboard productsCount={products.length} cartItemsCount={cartItems.length} />;
    }
  };

  return (
    <>
      <Sidebar currentView={currentView} setView={setView} />
      <main className="main-content">
        <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#fff', borderRadius: '2rem', border: '1px solid var(--border)', fontSize: '0.875rem' }}>
            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></div>
            <span>System Active</span>
          </div>
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem' }}>
            AD
          </div>
        </header>
        {renderView()}
      </main>
    </>
  );
}

export default App;
