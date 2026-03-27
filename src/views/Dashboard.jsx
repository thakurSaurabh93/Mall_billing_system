import React from 'react';
import { ShoppingBag, Users, DollarSign, ArrowUpRight, ShoppingCart } from 'lucide-react';
import { CustomerModule } from '../modules/CustomerModule';

const Dashboard = ({ productsCount, cartItemsCount }) => {
  const visitedUsersCount = Object.keys(CustomerModule.getCustomers()).length;

  const stats = [
    { label: 'Total Products', value: productsCount, icon: <ShoppingBag />, color: '#3b82f6' },
    { label: 'Active Cart', value: cartItemsCount, icon: <ShoppingCart />, color: '#10b981' },
    { label: 'Visited Users', value: visitedUsersCount, icon: <Users />, color: '#8b5cf6' },
    { label: 'Today\'s Revenue', value: '$1,250', icon: <DollarSign />, color: '#f59e0b' },
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '1.875rem', fontWeight: 'bold' }}>Dashboard</h1>
      
      <div className="grid grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: `${stat.color}15`, color: stat.color, padding: '0.75rem', borderRadius: '0.5rem' }}>
              {stat.icon}
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{stat.label}</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Recent Activity</h3>
          <button className="btn btn-outline" style={{ fontSize: '0.875rem' }}>View All</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2, 3].map((_, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-main)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} color="var(--primary)" />
                </div>
                <div>
                  <p style={{ fontWeight: '500' }}>New Invoice Generated</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Customer: John Doe</p>
                </div>
              </div>
              <p style={{ fontWeight: '600', color: 'var(--primary)' }}>$450.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
