import React from 'react';
import { Link } from 'react-router-dom';
import { trendingTags, users } from '../data/mockData';

export default function RightSidebar() {
  const suggested = users.slice(1, 4);

  return (
    <div className="right-sidebar">
      {/* Trending Topics */}
      <div className="sidebar-card">
        <div className="sidebar-card-title">🔥 Trending Topics</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {trendingTags.slice(0, 8).map(tag => (
            <Link key={tag} to={`/explore?q=${tag.replace('#','')}`}
              style={{
                padding: '5px 12px',
                background: 'var(--off-white)',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                border: '1px solid var(--border-light)',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--cream)'; e.currentTarget.style.color='var(--primary)'; e.currentTarget.style.borderColor='var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='var(--off-white)'; e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.borderColor='var(--border-light)'; }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Suggested Writers */}
      <div className="sidebar-card">
        <div className="sidebar-card-title">✍️ Writers to Follow</div>
        {suggested.map(user => {
          const initials = user.name.split(' ').map(n => n[0]).join('');
          return (
            <div key={user.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Link to="/profile">
                <div className={`avatar avatar-color-${user.colorIndex}`} style={{ width: 38, height: 38, fontSize: 13 }}>
                  {initials}
                </div>
              </Link>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{user.followers.toLocaleString()} followers</div>
              </div>
              <button style={{
                padding: '5px 12px',
                borderRadius: 20,
                border: '1.5px solid var(--primary)',
                background: 'transparent',
                color: 'var(--primary)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.color='white'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--primary)'; }}
              >
                Follow
              </button>
            </div>
          );
        })}
      </div>

      {/* Popular This Week */}
      <div className="sidebar-card">
        <div className="sidebar-card-title">⭐ Popular This Week</div>
        {[
          { rank: 1, title: 'Araku Valley Trek', reads: '12.4K' },
          { rank: 2, title: 'Leaving ₹18 LPA Job', reads: '9.8K' },
          { rank: 3, title: 'Startup Failure Story', reads: '8.1K' },
          { rank: 4, title: 'Ammamma\'s Kitchen', reads: '7.5K' },
          { rank: 5, title: 'Saving ₹10L on ₹6 LPA', reads: '6.9K' },
        ].map(item => (
          <div key={item.rank} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
            <span style={{ fontSize: 20, fontWeight: 900, color: 'var(--border)', fontFamily: 'var(--font-serif)', lineHeight: 1.2, minWidth: 24 }}>
              {item.rank.toString().padStart(2, '0')}
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3, marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.reads} reads</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
