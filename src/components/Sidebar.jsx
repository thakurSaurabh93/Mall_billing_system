import React from 'react';
import { LayoutDashboard, ShoppingCart, PlusCircle, CreditCard, FileText } from 'lucide-react';

const Sidebar = ({ currentView, setView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'add-product', label: 'Add Product', icon: <PlusCircle size={20} /> },
    { id: 'cart', label: 'Cart', icon: <ShoppingCart size={20} /> },
    { id: 'checkout', label: 'Checkout', icon: <CreditCard size={20} /> },
    { id: 'invoice', label: 'Invoice', icon: <FileText size={20} /> }
  ];

  return (
    <div className="sidebar">
      <div style={{ padding: '0 1rem', marginBottom: '1rem' }}>
        <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>Mall Billing</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Management System</p>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-link ${currentView === item.id ? 'active' : ''}`}
            onClick={() => setView(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
