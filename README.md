BlockOff
BlockOff is a community-driven scam detection and reporting platform that helps users identify phishing attempts, fraudulent messages, and suspicious links before it's too late.
The project consists of four connected parts:
Website — A React landing page that serves as the public face of BlockOff. It explains what phishing is, lets users sign up and log in, and gives registered users a profile dashboard where they can submit threat reports, track their report count, and see how many scammers they've helped block globally.
Mobile App — A TypeScript/React mobile app where users can paste suspicious SMS messages, social media handles, phone numbers, or URLs for an instant scam risk analysis. It scores content by severity, flags warning signs like urgency language, lookalike domains, and OTP phishing, and surfaces trending community-reported scams on the home screen.
Browser Extension — A Chrome extension that automatically warns users when they visit potentially unsafe websites, injecting a dismissible warning banner directly into the page.
Backend API — A Java Spring Boot REST API handling user authentication, domain lookups, unit/report management, and data persistence.
