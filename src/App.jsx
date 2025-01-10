import React from 'react'
    import './App.css'

    export default function App() {
      return (
        <div className="tiktok-container">
          <nav className="tiktok-nav">
            <div className="tiktok-logo">
              <span className="tiktok-gradient">TikTok</span> Quiz
            </div>
            <div className="tiktok-menu">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#support">Support</a>
              <a href="#login" className="tiktok-login">Login</a>
            </div>
            <button className="tiktok-button">Get Started</button>
          </nav>
          
          <section className="tiktok-hero">
            <div className="tiktok-gradient-overlay"></div>
            <div className="tiktok-hero-content">
              <h1 className="tiktok-headline">
                Create Live Quizzes<br />
                <span className="tiktok-gradient">Boost Your Stream Engagement</span>
              </h1>
              <p className="tiktok-subheadline">
                Turn passive viewers into active participants with interactive quizzes that integrate seamlessly with TikTok Live
              </p>
              <div className="tiktok-cta-group">
                <button className="tiktok-button tiktok-cta">
                  Start Creating
                </button>
                <button className="tiktok-button tiktok-cta-secondary">
                  Watch Demo
                </button>
              </div>
              <div className="tiktok-partners">
                <img src="/logos/tiktok.svg" alt="TikTok" />
                <img src="/logos/obs.svg" alt="OBS" />
                <img src="/logos/streamlabs.svg" alt="Streamlabs" />
              </div>
            </div>
          </section>
        </div>
      )
    }
