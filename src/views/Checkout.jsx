import React, { useState } from 'react';
import { CreditCard, Tag, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { TaxModule } from '../modules/TaxModule';
import { BillingModule } from '../modules/BillingModule';
import { CustomerModule } from '../modules/CustomerModule';

const Checkout = ({ subtotal, onConfirmOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const gst = TaxModule.calculateGST(subtotal);
  const { discountAmount, finalTotal } = BillingModule.calculateFinalTotal(subtotal, gst, discount);

  const handleNumberChange = (e) => {
    const num = e.target.value;
    setCustomerNumber(num);
    const existing = CustomerModule.getCustomerByNumber(num);
    if (existing) {
      setCustomerName(existing.name);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!customerName || !customerNumber) return alert('Please enter customer name and number');
    onConfirmOrder({ customerName, customerNumber, subtotal, gst, discount: discountAmount, total: finalTotal });
  };

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Checkout</h1>
      
      <div className="grid grid-cols-2">
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Customer Details</h3>
          <form onSubmit={handleConfirm} className="grid">
            <div>
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Customer Name</label>
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
              <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)' }}>Customer Number</label>
              <input
                type="tel"
                className="input-field"
                placeholder="e.g. 555-1234"
                value={customerNumber}
                onChange={handleNumberChange}
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

          <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Payment Method</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="button"
              className={`btn ${paymentMethod === 'Cash' ? 'btn-primary' : 'btn-outline'}`}
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={() => setPaymentMethod('Cash')}>
              <CreditCard size={18} /> Cash / Card
            </button>
            <button 
              type="button"
              className={`btn ${paymentMethod === 'UPI' ? 'btn-primary' : 'btn-outline'}`}
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={() => setPaymentMethod('UPI')}>
              <QrCode size={18} /> UPI Payment
            </button>
          </div>
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

            {paymentMethod === 'UPI' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: '0.5rem' }}>
                <p style={{ marginBottom: '1rem', fontWeight: '600' }}>Scan to Pay with UPI</p>
                <div style={{ padding: '0.75rem', backgroundColor: '#fff', borderRadius: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <QRCodeSVG 
                    value={`upi://pay?pa=mallbilling@upi&pn=Mall%20Billing&am=${finalTotal.toFixed(2)}`}
                    size={160}
                    level={"Q"}
                  />
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>mallbilling@upi</p>
              </div>
            )}
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
