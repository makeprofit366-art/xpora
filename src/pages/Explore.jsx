import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import Toast from '../components/Toast';
import { posts, categories, trendingTags, users } from '../data/mockData';

const TIME_FILTERS = ['All Time', 'Today', 'This Week', 'This Month'];

export default function Explore() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('cat') || '');
  const [timeFilter, setTimeFilter] = useState('All Time');
  const [toast, setToast] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = posts.filter(p => {
    const matchCat = !activeCategory || p.category === activeCategory;
    const matchQ = !query || p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.preview.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQ;
  });

  const trendingWriters = users.slice(0, 4);

  return (
    <div>
      <Navbar isLoggedIn={true} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>
        {/* Search header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 900, marginBottom: 8 }}>
            Discover Stories
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 28 }}>
            Explore thousands of experiences from writers across India
          </p>

          {/* Big search bar */}
          <div style={{ position: 'relative', maxWidth: 620, margin: '0 auto' }}>
            <Search size={20} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search stories, topics, writers..."
              style={{
                width: '100%',
                padding: '16px 60px 16px 52px',
                border: '2px solid var(--border)',
                borderRadius: 40,
                fontSize: 16,
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor='var(--primary)'; e.target.style.boxShadow='0 4px 20px rgba(255,107,53,0.12)'; }}
              onBlur={e => { e.target.style.borderColor='var(--border)'; e.target.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'; }}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                padding: '8px 14px', border: '1px solid var(--border)', borderRadius: 24,
                background: showFilters ? 'var(--primary)' : 'white',
                color: showFilters ? 'white' : 'var(--text-muted)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13,
                transition: 'all 0.18s',
              }}>
              <SlidersHorizontal size={14} /> Filter
            </button>
          </div>

          {/* Filters row */}
          {showFilters && (
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap', animation: 'fadeIn 0.25s ease' }}>
              {TIME_FILTERS.map(f => (
                <button key={f} onClick={() => setTimeFilter(f)} style={{
                  padding: '6px 16px', borderRadius: 20, border: '1.5px solid',
                  borderColor: timeFilter === f ? 'var(--primary)' : 'var(--border)',
                  background: timeFilter === f ? 'var(--cream)' : 'white',
                  color: timeFilter === f ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', transition: 'all 0.18s',
                }}>
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
          <button onClick={() => setActiveCategory('')} style={{
            padding: '7px 18px', borderRadius: 24,
            border: '1.5px solid', fontFamily: 'var(--font-sans)',
            borderColor: !activeCategory ? 'var(--primary)' : 'var(--border)',
            background: !activeCategory ? 'var(--primary)' : 'white',
            color: !activeCategory ? 'white' : 'var(--text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.18s',
          }}>
            All
          </button>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? '' : cat.id)} style={{
              padding: '7px 18px', borderRadius: 24,
              border: '1.5px solid',
              borderColor: activeCategory === cat.id ? 'var(--primary)' : 'var(--border)',
              background: activeCategory === cat.id ? 'var(--cream)' : 'white',
              color: activeCategory === cat.id ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-sans)', transition: 'all 0.18s',
            }}>
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32, alignItems: 'start' }}>
          {/* Posts grid */}
          <div>
            {query && (
              <div style={{ marginBottom: 20, fontSize: 14, color: 'var(--text-muted)' }}>
                {filtered.length} results for <strong style={{ color: 'var(--text-primary)' }}>"{query}"</strong>
              </div>
            )}

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>No stories found</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Try different keywords or browse categories</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {filtered.map(post => <PostCard key={post.id} post={post} onToast={setToast} />)}
              </div>
            )}
          </div>

          {/* Right panel */}
          <div style={{ position: 'sticky', top: 88 }}>
            {/* Trending writers */}
            <div className="sidebar-card" style={{ marginBottom: 20 }}>
              <div className="sidebar-card-title">🌟 Trending Writers</div>
              {trendingWriters.map(user => {
                const initials = user.name.split(' ').map(n=>n[0]).join('');
                return (
                  <div key={user.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <Link to="/profile">
                      <div className={`avatar avatar-color-${user.colorIndex}`} style={{ width: 40, height: 40, fontSize: 14 }}>{initials}</div>
                    </Link>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>{user.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{user.posts} stories · {user.followers.toLocaleString()} followers</div>
                    </div>
                    <button style={{
                      padding: '4px 12px', borderRadius: 20,
                      border: '1.5px solid var(--primary)', background: 'transparent',
                      color: 'var(--primary)', fontSize: 11, fontWeight: 700,
                      cursor: 'pointer', fontFamily: 'var(--font-sans)',
                      transition: 'all 0.18s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background='var(--primary)'; e.currentTarget.style.color='white'; }}
                    onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--primary)'; }}>
                      Follow
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Tag cloud */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">🏷️ Popular Tags</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {trendingTags.map((tag, i) => (
                  <button key={tag} onClick={() => setQuery(tag.replace('#',''))} style={{
                    padding: '5px 12px',
                    borderRadius: 20,
                    border: '1px solid var(--border-light)',
                    background: 'var(--off-white)',
                    fontSize: 12, fontWeight: 500,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: `${Math.max(10, 14 - i)}px`,
                    transition: 'all 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background='var(--cream)'; e.currentTarget.style.color='var(--primary)'; e.currentTarget.style.borderColor='var(--primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='var(--off-white)'; e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.borderColor='var(--border-light)'; }}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
