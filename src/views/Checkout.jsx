import React, { useState } from 'react';
import { CreditCard, Tag } from 'lucide-react';
import { TaxModule } from '../modules/TaxModule';
import { BillingModule } from '../modules/BillingModule';

const Checkout = ({ subtotal, onConfirmOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [discount, setDiscount] = useState(0);

  const gst = TaxModule.calculateGST(subtotal);
  const { discountAmount, finalTotal } = BillingModule.calculateFinalTotal(subtotal, gst, discount);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!customerName) return alert('Please enter customer name');
    onConfirmOrder({ customerName, subtotal, gst, discount: discountAmount, total: finalTotal });
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Checkout</h1>
      
      <div className="grid grid-cols-2">
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Customer Details</h3>
          <form onSubmit={handleConfirm} className="grid">
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Customer Full Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="John Doe"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Discount Percentage (%)</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  className="input-field"
                  placeholder="0"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  min="0"
                  max="100"
                />
                <Tag size={16} style={{ position: 'absolute', right: '12px', top: '22px', color: 'var(--text-muted)' }} />
              </div>
            </div>
          </form>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Payment Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>GST (18%)</span>
              <span>${gst.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
              <span>Discount</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0.5rem 0' }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold' }}>
              <span>Total Amount</span>
              <span style={{ color: 'var(--primary)' }}>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={handleConfirm}>
            <CreditCard size={18} />
            Confirm & Generate Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
