// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [email, setEmail] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (email) {
  //     setIsSubmitted(true);
  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //       setEmail('');
  //     }, 3000);
  //   }
  // };

  return (
    <div>
      <div className="bg-gradient">
              {/* <img src="\gala_background.jpeg" /> */}
      {/* Header */}
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <div className="logo-icon"><img className="logo-icon-img" src="\logo.png"/></div>
            <span className="logo-text"></span>
          </div>
          <nav className="nav-links">
            <a href="" className="nav-link">Dashboard</a>
            <a href="" className="nav-link">Profile</a>
            <a href="" className="nav-link">Waitlist</a>
            <a href="" className="nav-link">Care Providers</a>
            <a href="" className="nav-link">Care Home</a>
            <a href="" className="nav-link">Message</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="content">
          {/* Hero Section */}
          <div className="hero">            
            <h1 className="hero-title">
              Coming
              <span className="hero-title-accent"> Soon...</span>
            </h1>
            
            <p className="hero-description">
            <strong>The nucleus of elder care in Canada.</strong> <br/>
            Finding trusted care for aging loved ones is confusing, frustrating, and slow. We’re changing that.
            GALA is an agetech startup rebuilding the infrastructure of elder care—making it simple, transparent, and even something to celebrate.
            </p>

            {/* Email Signup
            <div className="signup-form">
              <form onSubmit={handleSubmit}>
                <div className="form-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="submit-btn"
                  >
                    {isSubmitted ? 'Thank You!' : 'Get Early Access'}
                  </button>
                </div>
              </form>
              
              {isSubmitted && (
                <p className="success-message">
                  Thanks for signing up! We'll keep you updated on our progress.
                </p>
              )}
            </div> */}
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue">
                <div className="icon-symbol"><img className="icon-symbol-img" src="\Matching.png"/></div>
              </div>
              <h3 className="feature-title">Get Matched Instantly</h3>
              <p className="feature-description"><strong>Personalized care, without the guesswork. </strong>
              GALA connects you to the right caregiver, care home, or senior living option—based on your real needs, preferences, and timing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon emerald">
                <div className="icon-symbol"><img className="icon-symbol-img" src="\Transparency.png"/></div>
              </div>
              <h3 className="feature-title">Full Transparency</h3>
              <p className="feature-description"><strong>See waitlists. Track applications. Know what’s next. </strong>
              Apply to care homes, monitor your spot on the waitlist, and communicate directly with providers—all in one place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">
                <div className="icon-symbol"><img className="icon-symbol-img" src="\Peace.png"/></div>
              </div>
              <h3 className="feature-title">Real-Time Peace of Mind</h3>
              <p className="feature-description"><strong>Know when help is on the way. </strong>
              For in-home care, track your caregiver’s route and arrival time. Behind it all, our concierge team is ready to support you.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">
              Be Part of the Future of Elder Care
            </h2>
            <p className="cta-description">
            No more guesswork. No more chaos. Just clarity, compassion, and care that fits your life. To be part of our pilot which will inform the development of our core technology, 
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-icon">✉️</div>
                <span>please contact info@galacares.com.</span>
              </div>
              {/* <div className="cta-feature">
                <div className="cta-icon">📅</div>
                <span>Launching Spring 2025</span>
              </div> */}
            </div>
          </div>
        </div>
      </main>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img className="logo-icon-img" src="\logo.png" alt="GALA Logo"/>
          </div>
          <p className="footer-text">
            © 2025 Golden Age & Living Ability Inc. (GALA) | Dedicated to dignified care solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;