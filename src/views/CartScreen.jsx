import React from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

const CartScreen = ({ cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <ShoppingCart size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Your cart is empty</h2>
          <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Add some products to get started!</p>
        </div>
      ) : (
        <div className="grid" style={{ gap: '2rem' }}>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: '500' }}>{item.name}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <button 
                          className="btn btn-outline" 
                          style={{ padding: '0.25rem' }}
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className="btn btn-outline" 
                          style={{ padding: '0.25rem' }}
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </td>
                    <td style={{ fontWeight: '600' }}>{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button 
                        className="btn btn-outline" 
                        style={{ color: '#ef4444', borderColor: 'transparent' }}
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ marginLeft: 'auto', minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${subtotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
