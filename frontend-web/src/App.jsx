import { useState } from 'react'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="app-wrapper">
            <section id="center">
                <div className="layout-grid">
                    {/* Left Spacer to keep center balanced */}
                    <div className="side-spacer"></div>

                    {/* Middle Column */}
                    <div className="middle-box">
                        <div className="hero">
                            <img src={heroImg} width="170" height="179" alt="Block OFF Logo" />
                        </div>

                        <h1>Welcome to Block <span className="orange-text">OFF</span></h1>
                        <p className="tagline">Your protection from Phishing</p>
                        <p>Secure your digital life with Block OFF.</p>

                        <button className="counter" onClick={() => setCount((count) => count + 1)}>
                            Scammers Blocked OFF: {count}
                        </button>

                        <div className="banner">
                            <h3>Check out how to become secure:</h3>
                            <div className="download-links">
                                <a href="#" className="download-btn">Download App (Soon)</a>
                                <a href="#" className="download-btn">Web Extension</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Orange Info Box */}
                    <aside className="side-box orange-bg">
                        <h3>What is Phishing?</h3>
                        <p>
                            Phishing is a cybercrime where scammers pose as legitimate institutions
                            to lure individuals into providing sensitive data or take your money.
                        </p>
                        <hr />
                        <p className="info-highlight">
                            <strong>Protect Yourself:</strong> Block OFF identifies scammers and warns you about sketcy links, emails, phones and ect. when they try to contact you.
                        </p>
                    </aside>
                </div>
            </section>

            <section id="next-steps">
                <div id="docs">
                    <h2>Documentation</h2>
                    <p>Learn how Block OFF keeps you safe.</p>
                    <ul>
                        <li><a href="#">Security Guide</a></li>
                        <li><a href="#">API Docs</a></li>
                    </ul>
                </div>

                <div id="social">
                    <h2>Connect</h2>
                    <p>Join our community for updates.</p>
                    <ul>
                        <li><a href="https://github.com">GitHub</a></li>
                        <li><a href="https://x.com">X / Twitter</a></li>
                    </ul>

                    <div className="contact-area">
                        <p className="contact-label">Get in contact with the team:</p>
                        <a href="mailto:BlockOFFService@gmail.com" className="email-display">
                            BlockOFFService@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App