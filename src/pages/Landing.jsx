import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Edit3, Users, BookOpen, TrendingUp, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import { posts, categories } from '../data/mockData';

export default function Landing() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    posts.slice(0, 3).forEach((_, i) => {
      setTimeout(() => setVisibleCards(prev => [...prev, i]), i * 150 + 400);
    });
  }, []);

  return (
    <div style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <Navbar isLoggedIn={false} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-blue) 0%, #1e4a73 50%, #0f2a40 100%)',
        padding: '90px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,107,53,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -40, width: 240, height: 240, borderRadius: '50%', background: 'rgba(245,166,35,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', animation: 'fadeIn 0.7s ease' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,107,53,0.18)', borderRadius: 24,
            padding: '6px 16px', marginBottom: 28,
            color: 'var(--primary-light)', fontSize: 13, fontWeight: 600,
          }}>
            <Star size={13} fill="currentColor" /> Telugu & English Stories Platform
          </div>

          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: '-1.5px',
          }}>
            Meeru Cheppina<br />
            <span style={{ color: 'var(--primary)' }}>Kathalu</span> Inspire Chestaayi
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Share your travel stories, life experiences, startup journeys, and ideas. Connect with readers across India who want to hear your authentic voice.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/feed" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px', borderRadius: 32 }}>
              Start Reading
              <ArrowRight size={18} />
            </Link>
            <Link to="/write" className="btn" style={{
              fontSize: 16, padding: '14px 32px', borderRadius: 32,
              background: 'rgba(255,255,255,0.12)', color: 'white',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
            }}>
              <Edit3 size={18} />
              Share Your Story
            </Link>
          </div>

          {/* stats */}
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 56, flexWrap: 'wrap' }}>
            {[['12,000+', 'Stories Shared'], ['45,000+', 'Readers'], ['850+', 'Active Writers']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'white', fontFamily: 'var(--font-serif)' }}>{num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
            Featured Experiences
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>Stories that moved, inspired, and stayed with our readers</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {posts.filter(p => p.featured).slice(0, 3).map((post, i) => {
            const initials = post.author.name.split(' ').map(n => n[0]).join('');
            return (
              <Link key={post.id} to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.22s, box-shadow 0.22s',
                  animation: visibleCards.includes(i) ? 'fadeIn 0.45s ease both' : 'none',
                  opacity: visibleCards.includes(i) ? 1 : 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='var(--card-shadow-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
                  <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <span className={`badge badge-${post.category}`} style={{ marginBottom: 10 }}>{post.category}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: 10 }}>{post.title}</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }} className="truncate-2">{post.preview}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-light)' }}>
                      <div className={`avatar avatar-color-${post.author.colorIndex}`} style={{ width: 28, height: 28, fontSize: 11 }}>{initials}</div>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{post.author.name}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 'auto' }}>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: 'var(--off-white)', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 800, marginBottom: 12 }}>How It Works</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>Three simple steps to share your story with the world</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              { icon: Edit3, step: '01', title: 'Write Your Story', desc: 'Use our clean editor to write in Telugu or English. Add photos, format beautifully, and tell it your way.' },
              { icon: Users, step: '02', title: 'Connect With Readers', desc: 'Your story finds the right audience — people who share your passions, background, and curiosity.' },
              { icon: TrendingUp, step: '03', title: 'Grow Your Voice', desc: 'Build a following, get feedback, and become a recognized voice in your community.' },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center', padding: '32px 24px', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent-gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', color: 'white',
                }}>
                  <Icon size={22} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 8 }}>STEP {step}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Explore by Category</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>Whatever your interest — there's a story waiting for you</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          {categories.map(cat => (
            <Link key={cat.id} to={`/explore?cat=${cat.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                padding: '14px 24px',
                background: 'white',
                borderRadius: 32,
                border: '1.5px solid var(--border-light)',
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 15, fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(255,107,53,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border-light)'; e.currentTarget.style.color=''; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
              >
                <span style={{ fontSize: 20 }}>{cat.emoji}</span>
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        padding: '72px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 900, color: 'white', marginBottom: 16 }}>
            Mee Kadhani Cheppandi
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            Join thousands of Telugu and Indian writers who are sharing their authentic experiences, building audiences, and inspiring each other.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/write" className="btn" style={{ fontSize: 16, padding: '14px 32px', borderRadius: 32, background: 'white', color: 'var(--primary)', fontWeight: 700 }}>
              <Edit3 size={18} /> Write Your First Story
            </Link>
            <Link to="/feed" className="btn" style={{ fontSize: 16, padding: '14px 32px', borderRadius: 32, background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)' }}>
              <BookOpen size={18} /> Browse Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--accent-blue)', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 900, color: 'var(--primary)', marginBottom: 8 }}>
          Xp<span style={{ color: 'white' }}>ora</span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
          © 2025 Xpora. Built with ❤️ for Indian storytellers.
        </p>
      </footer>
    </div>
  );
}
