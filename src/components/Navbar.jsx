import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Edit3, Bell, Menu, X } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Navbar({ isLoggedIn = true, onLoginClick }) {
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchVal.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchVal)}`);
    }
  };

  const initials = currentUser.name.split(' ').map(n => n[0]).join('');

  return (
    <nav className="navbar">
      <Link to={isLoggedIn ? '/feed' : '/'} className="navbar-logo">
        Xp<span>ora</span>
      </Link>

      {isLoggedIn && (
        <div className="navbar-search">
          <Search size={15} className="navbar-search-icon" />
          <input
            type="text"
            placeholder="Search stories, writers, topics..."
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      )}

      <div className="navbar-actions">
        {isLoggedIn ? (
          <>
            <Link to="/write" className="btn btn-primary" style={{ gap: 6 }}>
              <Edit3 size={15} />
              Write
            </Link>
            <button className="btn btn-ghost" style={{ padding: '8px', borderRadius: '50%', width: 38, height: 38, display:'flex',alignItems:'center',justifyContent:'center' }}>
              <Bell size={18} />
            </button>
            <Link to="/profile">
              <div
                className={`avatar avatar-color-${currentUser.colorIndex}`}
                style={{ width: 36, height: 36, fontSize: 13, cursor: 'pointer' }}
                title={currentUser.name}
              >
                {initials}
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/feed" className="btn btn-outline">Sign In</Link>
            <Link to="/feed" className="btn btn-primary">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
}
