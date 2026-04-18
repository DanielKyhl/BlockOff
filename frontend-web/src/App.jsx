import { useState } from 'react'
import heroImg from './assets/hero.png'
import './index.css'

function App() {
    // Starting the count at zero as requested
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} width="170" height="179" alt="Block OFF Logo" />
                </div>

                <div>
                    <h1>Welcome to Block <span className="orange-text">OFF</span></h1>
                    <p className="tagline">Your protection from Phishing</p>
                    <p>
                        Secure your digital life with Block OFF.
                    </p>
                </div>

                {/* The Counter Button */}
                <button
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Scammers Blocked OFF: {count}
                </button>

                {/* Download Banner */}
                <div className="banner">
                    <h3>Check out how to become secure:</h3>
                    <div className="download-links">
                        <a href="#" className="download-btn">Download App (Coming Soon)</a>
                        <a href="#" className="download-btn">Web Extension (In Development)</a>
                    </div>
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
                </div>
            </section>
        </>
    )
}

export default App