import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Tag, Eye, Save, Send, X, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Toast from '../components/Toast';
import { categories } from '../data/mockData';

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [toast, setToast] = useState(null);
  const [preview, setPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    setWordCount(e.target.value.trim().split(/\s+/).filter(Boolean).length);
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase().replace(/\s+/g, '-');
    if (t && !tags.includes(t) && tags.length < 5) {
      setTags([...tags, t]);
      setTagInput('');
    }
  };

  const removeTag = (tag) => setTags(tags.filter(t => t !== tag));

  const handlePublish = () => {
    if (!title.trim()) { setToast('⚠️ Please add a title'); return; }
    if (!body.trim()) { setToast('⚠️ Please write your story'); return; }
    if (!selectedCategory) { setToast('⚠️ Please select a category'); return; }
    setToast('🎉 Story published successfully!');
    setTimeout(() => navigate('/feed'), 1800);
  };

  const handleDraft = () => {
    setToast('📝 Draft saved!');
  };

  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div>
      <Navbar isLoggedIn={true} />

      {/* Write toolbar */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 90,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-light)',
        padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1, display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Category */}
          <div style={{ position: 'relative' }}>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              style={{
                padding: '7px 32px 7px 14px',
                border: '1.5px solid var(--border)',
                borderRadius: 24, fontSize: 13, fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                color: selectedCategory ? 'var(--text-primary)' : 'var(--text-muted)',
                background: 'var(--off-white)', cursor: 'pointer',
                appearance: 'none', outline: 'none',
              }}>
              <option value="">Category</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>)}
            </select>
            <ChevronDown size={13} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
          </div>

          {wordCount > 0 && (
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {wordCount} words · {readTime} min read
            </span>
          )}
        </div>

        <button onClick={() => setPreview(!preview)} className="btn btn-outline" style={{ padding: '7px 16px', fontSize: 13 }}>
          <Eye size={14} />
          {preview ? 'Edit' : 'Preview'}
        </button>
        <button onClick={handleDraft} className="btn btn-outline" style={{ padding: '7px 16px', fontSize: 13 }}>
          <Save size={14} />
          Save Draft
        </button>
        <button onClick={handlePublish} className="btn btn-primary" style={{ padding: '7px 18px', fontSize: 13 }}>
          <Send size={14} />
          Publish
        </button>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px 100px' }}>
        {preview ? (
          /* Preview mode */
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              PREVIEW
            </div>
            {coverUrl && <img src={coverUrl} alt="cover" style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: 32 }} />}
            {selectedCategory && <span className={`badge badge-${selectedCategory}`} style={{ marginBottom: 16, display: 'inline-block' }}>{selectedCategory}</span>}
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.5px' }}>
              {title || <span style={{ color: 'var(--text-muted)' }}>Your title here...</span>}
            </h1>
            <div style={{ fontSize: 17, lineHeight: 1.85, color: '#2A2A2A', whiteSpace: 'pre-wrap' }}>
              {body || <span style={{ color: 'var(--text-muted)' }}>Your story will appear here...</span>}
            </div>
            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }}>
                {tags.map(t => (
                  <span key={t} style={{ padding: '5px 14px', borderRadius: 20, background: 'var(--off-white)', border: '1px solid var(--border-light)', fontSize: 13, color: 'var(--text-secondary)' }}>#{t}</span>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Edit mode */
          <div>
            {/* Cover image */}
            <div style={{ marginBottom: 28 }}>
              {coverUrl ? (
                <div style={{ position: 'relative' }}>
                  <img src={coverUrl} alt="cover" style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 'var(--radius)' }} />
                  <button onClick={() => setCoverUrl('')} style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%',
                    width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', cursor: 'pointer',
                  }}>
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <input
                    placeholder="Paste cover image URL (optional)..."
                    value={coverUrl}
                    onChange={e => setCoverUrl(e.target.value)}
                    style={{
                      flex: 1, padding: '10px 16px',
                      border: '1.5px dashed var(--border)',
                      borderRadius: 'var(--radius-sm)', fontSize: 14,
                      fontFamily: 'var(--font-sans)', outline: 'none',
                      background: 'var(--off-white)', color: 'var(--text-secondary)',
                    }}
                  />
                  <button className="btn btn-outline" style={{ padding: '9px 14px', flexShrink: 0 }}>
                    <Image size={16} /> Add Cover
                  </button>
                </div>
              )}
            </div>

            {/* Title */}
            <textarea
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Your story begins with a great title..."
              rows={2}
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                background: 'transparent',
                resize: 'none',
                marginBottom: 8,
                letterSpacing: '-0.5px',
              }}
            />

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--border-light)', margin: '16px 0 24px' }} />

            {/* Body */}
            <textarea
              value={body}
              onChange={handleBodyChange}
              placeholder="Tell your story... Use Telugu or English, or mix both. Your voice is welcome here.

Tips:
• Start with a hook that draws readers in
• Use **bold text** for emphasis
• Break into paragraphs for readability
• Add specific details — they make stories real"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                lineHeight: 1.85,
                color: 'var(--text-primary)',
                background: 'transparent',
                resize: 'none',
                minHeight: 400,
              }}
            />

            {/* Tags */}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Tag size={14} /> Add tags (up to 5)
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    padding: '5px 12px', borderRadius: 20,
                    background: 'var(--cream)', border: '1px solid rgba(255,107,53,0.3)',
                    fontSize: 13, color: 'var(--primary)',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    #{tag}
                    <button onClick={() => removeTag(tag)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', padding: 0, lineHeight: 1 }}>×</button>
                  </span>
                ))}
              </div>
              {tags.length < 5 && (
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ',') && (e.preventDefault(), addTag())}
                    placeholder="Type a tag and press Enter..."
                    style={{
                      flex: 1, padding: '8px 14px',
                      border: '1.5px solid var(--border)',
                      borderRadius: 24, fontSize: 14,
                      fontFamily: 'var(--font-sans)', outline: 'none',
                    }}
                    onFocus={e => e.target.style.borderColor='var(--primary)'}
                    onBlur={e => e.target.style.borderColor='var(--border)'}
                  />
                  <button onClick={addTag} className="btn btn-outline" style={{ padding: '7px 16px', fontSize: 13 }}>Add</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
