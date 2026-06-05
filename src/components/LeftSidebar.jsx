import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, TrendingUp, Bookmark, User } from 'lucide-react';
import { currentUser, categories } from '../data/mockData';

const navItems = [
  { icon: Home, label: 'Home', path: '/feed' },
  { icon: Compass, label: 'Explore', path: '/explore' },
  { icon: TrendingUp, label: 'Trending', path: '/explore?filter=trending' },
  { icon: Bookmark, label: 'Bookmarks', path: '/profile?tab=saved' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function LeftSidebar({ activeCategory, onCategoryChange }) {
  const location = useLocation();
  const initials = currentUser.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="left-sidebar">
      {/* Profile mini card */}
      <Link to="/profile" style={{ display: 'block', textDecoration: 'none' }}>
        <div className="sidebar-card" style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', transition: 'box-shadow 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
          <div className={`avatar avatar-color-${currentUser.colorIndex}`} style={{ width: 44, height: 44, fontSize: 16 }}>
            {initials}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{currentUser.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>@{currentUser.username}</div>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <nav style={{ marginBottom: 8 }}>
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link key={path} to={path} style={{ textDecoration: 'none' }}>
            <div className={`nav-item ${location.pathname === path.split('?')[0] ? 'active' : ''}`}>
              <Icon size={18} />
              {label}
            </div>
          </Link>
        ))}
      </nav>

      {/* Categories */}
      <div style={{ marginTop: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0 14px', marginBottom: 8 }}>
          Categories
        </div>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange && onCategoryChange(activeCategory === cat.id ? null : cat.id)}
            className={`nav-item ${activeCategory === cat.id ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start' }}
          >
            <span style={{ fontSize: 16 }}>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
