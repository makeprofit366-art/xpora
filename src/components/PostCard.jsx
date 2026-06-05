import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Share2, Clock } from 'lucide-react';

export default function PostCard({ post, onToast }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
    if (onToast) onToast(saved ? 'Removed from bookmarks' : '🔖 Saved to bookmarks');
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToast) onToast('🔗 Link copied to clipboard!');
  };

  const initials = post.author.name.split(' ').map(n => n[0]).join('');

  return (
    <Link to={`/post/${post.id}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div className="post-card">
        <div className="post-card-header">
          <div className={`avatar avatar-color-${post.author.colorIndex}`} style={{ width: 38, height: 38, fontSize: 13 }}>
            {initials}
          </div>
          <div className="post-card-meta">
            <div className="post-card-author">{post.author.name}</div>
            <div className="post-card-time">{post.createdAt}</div>
          </div>
          <span className={`badge badge-${post.category}`}>
            {post.category}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div className="post-card-title">{post.title}</div>
            <div className="post-card-preview truncate-3">{post.preview}</div>
          </div>
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ width: 120, height: 90, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
            />
          )}
        </div>

        <div className="post-card-footer">
          <button className={`post-action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
            <Heart size={15} fill={liked ? 'currentColor' : 'none'} />
            {likes}
          </button>
          <button className="post-action-btn" onClick={e => e.preventDefault()}>
            <MessageCircle size={15} />
            {post.comments}
          </button>
          <button className={`post-action-btn ${saved ? 'liked' : ''}`} onClick={handleSave} style={saved ? {color:'#7C3AED'} : {}}>
            <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} />
          </button>
          <button className="post-action-btn" onClick={handleShare}>
            <Share2 size={15} />
          </button>
          <div className="post-card-readtime">
            <Clock size={12} />
            {post.readTime} min read
          </div>
        </div>
      </div>
    </Link>
  );
}
