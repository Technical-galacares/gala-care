import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon">♥</div>
            <span className="logo-text">GALA</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="content">
          {/* Hero Section */}
          <div className="hero">
            <div className="coming-soon-badge">
              <div className="clock-icon">⏰</div>
              Coming Soon
            </div>
            
            <h1 className="hero-title">
              Caring for Those Who
              <span className="hero-title-accent">Cared for Us</span>
            </h1>
            
            <p className="hero-description">
              GALA is revolutionizing elder care with a comprehensive platform that connects families, 
              caregivers, and healthcare professionals to provide the best possible care for our loved ones.
            </p>

            {/* Email Signup */}
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
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue">
                <div className="icon-symbol">👥</div>
              </div>
              <h3 className="feature-title">Connected Care Network</h3>
              <p className="feature-description">
                Seamlessly connect family members, professional caregivers, and healthcare providers 
                in one comprehensive platform.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon emerald">
                <div className="icon-symbol">🛡️</div>
              </div>
              <h3 className="feature-title">Peace of Mind</h3>
              <p className="feature-description">
                Advanced monitoring, medication reminders, and emergency response features 
                ensure your loved ones are always safe and cared for.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">
                <div className="icon-symbol">💝</div>
              </div>
              <h3 className="feature-title">Personalized Care</h3>
              <p className="feature-description">
                AI-powered insights and personalized care plans tailored to each individual's 
                unique needs and preferences.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <h2 className="cta-title">
              Be Part of the Future of Elder Care
            </h2>
            <p className="cta-description">
              Join thousands of families who are already on our waitlist. Get exclusive early access 
              and help shape the platform that will transform how we care for our elders.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-icon">✉️</div>
                <span>No spam, just meaningful updates</span>
              </div>
              <div className="cta-feature">
                <div className="cta-icon">📅</div>
                <span>Launching Spring 2025</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">♥</div>
            <span className="footer-logo-text">GALA</span>
          </div>
          <p className="footer-text">
            © 2025 GALA Elder Care Platform. Building the future of compassionate care.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;