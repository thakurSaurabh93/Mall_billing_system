import React from 'react';
import { Download, Printer, CheckCircle } from 'lucide-react';

const InvoiceView = ({ invoiceData }) => {
  if (!invoiceData) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '4rem' }}>
        <h2 style={{ color: 'var(--text-muted)' }}>No invoice generated yet.</h2>
      </div>
    );
  }

  const { invoiceNumber, date, customerName, items, summary } = invoiceData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Invoice</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" onClick={handlePrint}>
            <Printer size={18} />
            Print
          </button>
          <button className="btn btn-primary">
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </div>

      <div className="card" style={{ padding: '3rem', backgroundColor: '#fff' }} id="printable-invoice">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', fontWeight: 'bold' }}>MALL BILLING</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>123 Premium Street, City</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>+1 234 567 890</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>#{invoiceNumber}</h2>
            <p style={{ color: 'var(--text-muted)' }}>Date: {date}</p>
          </div>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Bill To:</h4>
          <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>{customerName}</p>
        </div>

        <table style={{ marginBottom: '2rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-main)' }}>
              <th style={{ padding: '1rem' }}>Description</th>
              <th style={{ padding: '1rem' }}>Price</th>
              <th style={{ padding: '1rem' }}>Qty</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td style={{ padding: '1rem' }}>{item.name}</td>
                <td style={{ padding: '1rem' }}>${item.price.toFixed(2)}</td>
                <td style={{ padding: '1rem' }}>{item.quantity}</td>
                <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginLeft: 'auto', width: '250px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Subtotal</span>
            <span>${summary.subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>GST (18%)</span>
            <span>${summary.gst.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#ef4444' }}>
            <span>Discount</span>
            <span>-${summary.discount.toFixed(2)}</span>
          </div>
          <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '1rem 0' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>
            <span>Total</span>
            <span>${summary.total.toFixed(2)}</span>
          </div>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
          <CheckCircle size={32} color="#10b981" style={{ marginBottom: '0.5rem' }} />
          <p style={{ fontWeight: '500' }}>Thank you for your business!</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Standard terms and conditions apply.</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceView;
