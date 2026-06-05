import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Bookmark, Share2, ArrowLeft, Clock, MessageCircle, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import Toast from '../components/Toast';
import { posts } from '../data/mockData';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState(null);
  const [progress, setProgress] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Sai Kumar', text: 'This really resonated with me! I had the same experience when I visited Araku last year.', time: '1 hour ago', colorIndex: 1 },
    { id: 2, author: 'Divya Reddy', text: 'Beautifully written. The way you describe the fog-wrapped valleys made me feel like I was there!', time: '3 hours ago', colorIndex: 2 },
  ]);

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!post) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>😕</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginBottom: 12 }}>Story not found</h2>
          <Link to="/feed" className="btn btn-primary">Back to Feed</Link>
        </div>
      </div>
    );
  }

  const related = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);
  const initials = post.author.name.split(' ').map(n => n[0]).join('');

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([{ id: Date.now(), author: 'Priya Reddy', text: comment, time: 'Just now', colorIndex: 0 }, ...comments]);
    setComment('');
    setToast('💬 Comment posted!');
  };

  return (
    <div>
      {/* Reading progress bar */}
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <Navbar isLoggedIn={true} />

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '40px 20px 80px' }}>
        {/* Back button */}
        <button onClick={() => navigate(-1)} className="btn btn-ghost" style={{ marginBottom: 32, padding: '8px 0', color: 'var(--text-muted)' }}>
          <ArrowLeft size={16} /> Back
        </button>

        {/* Category + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <span className={`badge badge-${post.category}`}>{post.category}</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={13} /> {post.readTime} min read
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{post.createdAt}</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 900,
          lineHeight: 1.2,
          letterSpacing: '-0.5px',
          marginBottom: 24,
          color: 'var(--text-primary)',
        }}>
          {post.title}
        </h1>

        {/* Author */}
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, padding: '16px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
            <div className={`avatar avatar-color-${post.author.colorIndex}`} style={{ width: 44, height: 44, fontSize: 16 }}>{initials}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{post.author.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{post.author.location} · {post.author.followers.toLocaleString()} followers</div>
            </div>
            <button className="btn btn-outline" style={{ marginLeft: 'auto', padding: '7px 18px', fontSize: 13 }}>Follow</button>
          </div>
        </Link>

        {/* Cover Image */}
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: 40 }} />
        )}

        {/* Body */}
        <div style={{ fontSize: 18, lineHeight: 1.85, color: '#2A2A2A', fontFamily: 'var(--font-sans)' }}>
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, margin: '36px 0 12px', color: 'var(--text-primary)' }}>{para.replace(/\*\*/g, '')}</h3>;
            }
            if (para.match(/^\d+\./)) {
              const lines = para.split('\n');
              return (
                <ol key={i} style={{ paddingLeft: 24, margin: '16px 0' }}>
                  {lines.map((line, j) => (
                    <li key={j} style={{ marginBottom: 10, fontSize: 17, lineHeight: 1.75 }}
                      dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} style={{ marginBottom: 22 }}
                dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              />
            );
          })}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '40px 0', paddingTop: 24, borderTop: '1px solid var(--border-light)' }}>
          {post.tags.map(tag => (
            <Link key={tag} to={`/explore?q=${tag}`}
              style={{ padding: '5px 14px', borderRadius: 20, background: 'var(--off-white)', border: '1px solid var(--border-light)', fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none' }}>
              #{tag}
            </Link>
          ))}
        </div>

        {/* Reactions */}
        <div style={{ display: 'flex', gap: 12, padding: '20px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: 40 }}>
          <button onClick={() => { setLiked(!liked); }} className={`post-action-btn ${liked ? 'liked' : ''}`} style={{ fontSize: 15, padding: '10px 20px', border: '1.5px solid var(--border)', borderRadius: 32 }}>
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
            {liked ? post.likes + 1 : post.likes} Likes
          </button>
          <button onClick={() => { setSaved(!saved); setToast(saved ? 'Removed from bookmarks' : '🔖 Saved!'); }}
            className={`post-action-btn`} style={{ fontSize: 15, padding: '10px 20px', border: '1.5px solid var(--border)', borderRadius: 32, color: saved ? '#7C3AED' : undefined }}>
            <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
            Save
          </button>
          <button onClick={() => setToast('🔗 Link copied!')} className="post-action-btn" style={{ fontSize: 15, padding: '10px 20px', border: '1.5px solid var(--border)', borderRadius: 32 }}>
            <Share2 size={18} /> Share
          </button>
        </div>

        {/* Author card */}
        <div style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', padding: 28, marginBottom: 48, border: '1px solid rgba(255,107,53,0.15)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div className={`avatar avatar-color-${post.author.colorIndex}`} style={{ width: 60, height: 60, fontSize: 20 }}>{initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{post.author.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 10 }}>{post.author.location}</div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 14 }}>{post.author.bio}</p>
              <div style={{ display: 'flex', gap: 20, fontSize: 13 }}>
                <span><strong>{post.author.posts}</strong> <span style={{ color: 'var(--text-muted)' }}>stories</span></span>
                <span><strong>{post.author.followers.toLocaleString()}</strong> <span style={{ color: 'var(--text-muted)' }}>followers</span></span>
              </div>
            </div>
            <button className="btn btn-primary" style={{ flexShrink: 0 }}>Follow</button>
          </div>
        </div>

        {/* Comments */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
            <MessageCircle size={20} style={{ display: 'inline', marginRight: 8 }} />
            {comments.length} Comments
          </h3>

          {/* Comment input */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
            <div className="avatar avatar-color-0" style={{ width: 38, height: 38, fontSize: 13, flexShrink: 0 }}>PR</div>
            <div style={{ flex: 1, display: 'flex', gap: 8 }}>
              <input
                value={comment}
                onChange={e => setComment(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleComment()}
                placeholder="Write a comment..."
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  border: '1.5px solid var(--border)',
                  borderRadius: 24,
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  background: 'var(--off-white)',
                }}
                onFocus={e => e.target.style.borderColor='var(--primary)'}
                onBlur={e => e.target.style.borderColor='var(--border)'}
              />
              <button onClick={handleComment} className="btn btn-primary" style={{ borderRadius: '50%', width: 40, height: 40, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Comment list */}
          {comments.map(c => {
            const ci = c.author.split(' ').map(n=>n[0]).join('');
            return (
              <div key={c.id} style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                <div className={`avatar avatar-color-${c.colorIndex}`} style={{ width: 36, height: 36, fontSize: 12, flexShrink: 0 }}>{ci}</div>
                <div style={{ background: 'var(--off-white)', borderRadius: 12, padding: '12px 16px', flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{c.author} <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: 12 }}>· {c.time}</span></div>
                  <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{c.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700, marginBottom: 20 }}>More in {post.category}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {related.map(p => <PostCard key={p.id} post={p} onToast={setToast} />)}
            </div>
          </div>
        )}
      </div>

      {/* Floating action bar (mobile) */}
      <div style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        background: 'white', borderRadius: 40, padding: '10px 24px',
        display: 'flex', gap: 8, boxShadow: '0 4px 24px rgba(0,0,0,0.14)',
        border: '1px solid var(--border-light)', zIndex: 50,
      }}>
        <button onClick={() => setLiked(!liked)} className={`post-action-btn ${liked?'liked':''}`}>
          <Heart size={18} fill={liked?'currentColor':'none'} /> {liked ? post.likes+1 : post.likes}
        </button>
        <button className="post-action-btn"><MessageCircle size={18} /> {comments.length}</button>
        <button onClick={() => { setSaved(!saved); setToast(saved?'Removed':'🔖 Saved!'); }} className="post-action-btn" style={saved?{color:'#7C3AED'}:{}}>
          <Bookmark size={18} fill={saved?'currentColor':'none'} />
        </button>
        <button onClick={() => setToast('🔗 Link copied!')} className="post-action-btn">
          <Share2 size={18} />
        </button>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}


