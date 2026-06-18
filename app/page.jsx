"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch('api/posts')
      .then((res) => res.json())
      .then(res => setPosts(res))
      .finally(() => setLoading(false));
  }, []);

  const searchPost = (e) => {
    if (e.type == 'keydown' && e.key !== 'Enter') return;
    setSearch(true);
    setHasSearched(true);
    fetch('api/posts?q=' + inputRef.current.value)
      .then((res) => res.json())
      .then(res => setPosts(res))
      .finally(() => setSearch(false));
  };

  return (
    <>
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #312E81 100%);
          padding: 72px 24px 80px;
          text-align: center;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #A5B4FC;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 999px;
          padding: 4px 14px;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          color: #F8FAFC;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .hero-sub {
          font-size: 1.0625rem;
          color: #94A3B8;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Search bar */
        .search-wrap {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }
        .search-inner {
          display: flex;
          align-items: center;
          background: #1E293B;
          border: 1.5px solid rgba(99,102,241,0.35);
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          max-width: 520px;
          transition: border-color 0.2s;
          box-shadow: 0 0 0 0 rgba(99,102,241,0);
        }
        .search-inner:focus-within {
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.18);
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 13px 18px;
          font-size: 0.9375rem;
          color: #F1F5F9;
          caret-color: #6366F1;
        }
        .search-input::placeholder { color: #475569; }
        .search-btn {
          padding: 10px 22px;
          margin: 5px;
          background: #6366F1;
          color: #fff;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.18s, transform 0.12s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .search-btn:hover:not(:disabled) { background: #4F46E5; }
        .search-btn:active:not(:disabled) { transform: scale(0.97); }
        .search-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        /* Content area */
        .content-area {
          max-width: 1200px;
          margin: 0 auto;
          padding: 52px 24px 80px;
        }
        .section-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 32px;
        }
        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: -0.01em;
        }
        .post-count {
          font-size: 0.8125rem;
          color: #94A3B8;
          font-weight: 500;
        }

        /* Card grid */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }
        @media(min-width: 640px) {
          .posts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(min-width: 1024px) {
          .posts-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Card */
        .post-card {
          background: #fff;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          position: relative;
        }
        .post-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #6366F1;
          border-radius: 16px 0 0 16px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .post-card:hover {
          border-color: #C7D2FE;
          box-shadow: 0 12px 32px rgba(99,102,241,0.1), 0 2px 8px rgba(0,0,0,0.06);
          transform: translateY(-3px);
        }
        .post-card:hover::before { opacity: 1; }

        .card-img-wrap {
          overflow: hidden;
          height: 200px;
          background: #F1F5F9;
        }
        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .post-card:hover .card-img-wrap img {
          transform: scale(1.04);
        }
        .card-body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          transition: color 0.15s;
        }
        .post-card:hover .card-title { color: #4F46E5; }
        .card-desc {
          font-size: 0.875rem;
          color: #64748B;
          line-height: 1.65;
          flex: 1;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 16px;
        }
        .read-more {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #6366F1;
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.01em;
        }
        .read-more-arrow {
          transition: transform 0.18s;
          display: inline-block;
        }
        .post-card:hover .read-more-arrow { transform: translateX(4px); }

        /* Skeleton loading */
        .skeleton-card {
          background: #fff;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          overflow: hidden;
        }
        .skeleton-img {
          height: 200px;
          background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-body { padding: 20px 22px 22px; }
        .skeleton-line {
          border-radius: 6px;
          background: linear-gradient(90deg, #F1F5F9 25%, #E2E8F0 50%, #F1F5F9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          margin-bottom: 10px;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Empty state */
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 24px;
        }
        .empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        .empty-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 8px;
        }
        .empty-desc {
          font-size: 0.9375rem;
          color: #64748B;
        }
        .empty-query {
          font-weight: 600;
          color: #4F46E5;
        }
      `}</style>

      {/* Hero */}
      <div className="hero-section">
        <div className="hero-eyebrow">The Blog</div>
        <h1 className="hero-title">Ideas Worth Reading</h1>
        <p className="hero-sub">Explore our latest articles, stories, and insights crafted for curious minds.</p>
        <div className="search-wrap">
          <div className="search-inner">
            <input
              type="text"
              onKeyDown={searchPost}
              disabled={search}
              ref={inputRef}
              className="search-input"
              placeholder="Search articles…"
            />
            <button disabled={search} onClick={searchPost} className="search-btn">
              {search ? 'Searching…' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="content-area">
        <div className="section-header">
          <span className="section-title">
            {hasSearched ? 'Search Results' : 'Latest Articles'}
          </span>
          {!loading && posts.length > 0 && (
            <span className="post-count">{posts.length} {posts.length === 1 ? 'article' : 'articles'}</span>
          )}
        </div>

        <div className="posts-grid">
          {loading ? (
            [1,2,3].map(i => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-img" />
                <div className="skeleton-body">
                  <div className="skeleton-line" style={{height:18, width:'80%'}} />
                  <div className="skeleton-line" style={{height:14, width:'100%'}} />
                  <div className="skeleton-line" style={{height:14, width:'65%'}} />
                </div>
              </div>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={'/post/' + post._id} className="post-card">
                <div className="card-img-wrap">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-desc">{post.short_description}</p>
                  <div className="card-footer">
                    <span className="read-more">
                      Read article <span className="read-more-arrow">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <p className="empty-title">No articles found</p>
              {hasSearched && inputRef.current?.value && (
                <p className="empty-desc">
                  No results for <span className="empty-query">"{inputRef.current.value}"</span> — try a different keyword.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}