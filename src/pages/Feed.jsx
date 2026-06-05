import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import PostCard from '../components/PostCard';
import Toast from '../components/Toast';
import { posts } from '../data/mockData';
import { ChevronUp } from 'lucide-react';

const TABS = ['For You', 'Following', 'Latest'];

export default function Feed() {
  const [activeTab, setActiveTab] = useState('For You');
  const [activeCategory, setActiveCategory] = useState(null);
  const [toast, setToast] = useState(null);
  const [showBackTop, setShowBackTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filtered = activeCategory
    ? posts.filter(p => p.category === activeCategory)
    : posts;

  return (
    <div>
      <Navbar isLoggedIn={true} />

      <div className="page-layout">
        <LeftSidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <main className="main-content">
          {/* Tabs */}
          <div style={{
            display: 'flex',
            gap: 4,
            marginBottom: 24,
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: 0,
          }}>
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '10px 18px',
                border: 'none',
                background: 'transparent',
                fontSize: 14,
                fontWeight: activeTab === tab ? 700 : 500,
                color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.18s',
                fontFamily: 'var(--font-sans)',
              }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Posts */}
          {loading ? (
            // Skeleton
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)', padding: 24, marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                  <div className="skeleton" style={{ width: 38, height: 38, borderRadius: '50%' }} />
                  <div style={{ flex: 1 }}>
                    <div className="skeleton" style={{ height: 14, width: '30%', marginBottom: 6 }} />
                    <div className="skeleton" style={{ height: 12, width: '20%' }} />
                  </div>
                </div>
                <div className="skeleton" style={{ height: 24, width: '80%', marginBottom: 10 }} />
                <div className="skeleton" style={{ height: 14, marginBottom: 6 }} />
                <div className="skeleton" style={{ height: 14, width: '70%' }} />
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {filtered.map((post, i) => (
                <div key={post.id} style={{ animationDelay: `${i * 60}ms` }}>
                  <PostCard post={post} onToast={setToast} />
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>No stories in this category yet</div>
                  <div style={{ fontSize: 14 }}>Be the first to write one!</div>
                </div>
              )}
            </div>
          )}
        </main>

        <RightSidebar />
      </div>

      {/* Back to top */}
      <button className={`back-to-top ${showBackTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ChevronUp size={18} />
      </button>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
