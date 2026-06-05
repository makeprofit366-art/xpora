import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Edit3, Heart, Bookmark } from 'lucide-react';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import Toast from '../components/Toast';
import { currentUser, posts } from '../data/mockData';

const TABS = ['My Posts', 'Saved', 'Liked'];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('My Posts');
  const [toast, setToast] = useState(null);
  const [following, setFollowing] = useState(false);

  const initials = currentUser.name.split(' ').map(n => n[0]).join('');
  const userPosts = posts.filter((_, i) => i < 4);
  const savedPosts = posts.filter((_, i) => i >= 2 && i < 5);
  const likedPosts = posts.filter((_, i) => i >= 1 && i < 4);

  const displayPosts = activeTab === 'My Posts' ? userPosts : activeTab === 'Saved' ? savedPosts : likedPosts;

  return (
    <div>
      <Navbar isLoggedIn={true} />

      {/* Cover */}
      <div style={{
        height: 220,
        background: 'linear-gradient(135deg, var(--accent-blue) 0%, #2A5298 40%, var(--primary) 100%)',
        position: 'relative',
      }}>
        {/* pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Avatar + info */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, marginTop: -48, marginBottom: 24, flexWrap: 'wrap' }}>
          <div className={`avatar avatar-color-${currentUser.colorIndex}`} style={{ width: 96, height: 96, fontSize: 36, border: '4px solid white', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
            {initials}
          </div>
          <div style={{ flex: 1, paddingBottom: 8, minWidth: 200 }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 800, marginBottom: 4 }}>{currentUser.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 13 }}>
              <MapPin size={13} /> {currentUser.location}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, paddingBottom: 8, flexWrap: 'wrap' }}>
            <Link to="/write" className="btn btn-outline" style={{ fontSize: 13, padding: '8px 18px' }}>
              <Edit3 size={14} /> Write New Post
            </Link>
            <button
              onClick={() => { setFollowing(!following); setToast(following ? 'Unfollowed' : '✅ Following!'); }}
              className={`btn ${following ? 'btn-outline' : 'btn-primary'}`}
              style={{ fontSize: 13, padding: '8px 18px' }}>
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>

        {/* Bio */}
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24, maxWidth: 600 }}>
          {currentUser.bio}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
          {[
            ['Posts', currentUser.posts],
            ['Followers', currentUser.followers.toLocaleString()],
            ['Following', currentUser.following],
          ].map(([label, value]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 800, color: 'var(--text-primary)' }}>{value}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: '1px solid var(--border-light)', marginBottom: 28, display: 'flex', gap: 0 }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '11px 20px',
              border: 'none',
              background: 'transparent',
              fontSize: 14,
              fontWeight: activeTab === tab ? 700 : 500,
              color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
              marginBottom: -1,
              fontFamily: 'var(--font-sans)',
              display: 'flex', alignItems: 'center', gap: 6,
              transition: 'all 0.18s',
            }}>
              {tab === 'Saved' && <Bookmark size={14} />}
              {tab === 'Liked' && <Heart size={14} />}
              {tab}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 60 }}>
          {displayPosts.map(post => (
            <PostCard key={post.id} post={post} onToast={setToast} />
          ))}
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
