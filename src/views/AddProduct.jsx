import React, { useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: '', price: '', quantity: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && Number(product.price) > 0 && Number(product.quantity) > 0) {
      onAddProduct({
        ...product,
        price: Number(product.price),
        quantity: Number(product.quantity)
      });
      setProduct({ name: '', price: '', quantity: 1 });
      alert('Product added to catalog!');
    }
  };

  const handleReset = () => {
    setProduct({ name: '', price: '', quantity: 1 });
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Add New Product</h1>
      
      <div className="card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit} className="grid" style={{ gap: '1.25rem' }}>
          <div>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Product Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. Wireless Mouse"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2">
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Price ($)</label>
              <input
                type="number"
                className="input-field"
                placeholder="0.00"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                required
                min="0.01"
                step="0.01"
              />
            </div>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Quantity</label>
              <input
                type="number"
                className="input-field"
                placeholder="1"
                value={product.quantity}
                onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                required
                min="1"
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              <Plus size={18} />
              Add Product
            </button>
            <button type="button" className="btn btn-outline" onClick={handleReset}>
              <RotateCcw size={18} />
              Reset
            </button>
          </div>
        </form>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Preview Details</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Ensure all fields are correct before adding to the system inventory.
        </p>
      </div>
    </div>
  );
};

export default AddProduct;
