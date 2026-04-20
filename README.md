# BlockOff 🛡️

A community-driven scam detection and reporting platform that helps users identify phishing attempts, fraudulent messages, and suspicious links before it's too late.

---

## What is BlockOff?

Phishing is a cybercrime where scammers impersonate legitimate institutions to steal your information or money. BlockOff fights back by letting users scan, report, and share suspicious content — keeping the whole community safer.

---

## Project Structure

| Part | Tech | Description |
|------|------|-------------|
| `frontend-web` | React, Vite | Public landing page with user accounts and threat reporting |
| `mobile-app` | TypeScript, React, Capacitor | Mobile app for scanning suspicious messages, links and handles |
| `browser-extension` | JavaScript | Chrome extension that warns users on unsafe websites |
| `backend-api` | Java, Spring Boot | REST API handling auth, users, and report storage |

---

## Features

- 🔍 **Instant scam analysis** — paste any SMS, URL, phone number or @handle and get a severity score
- ⚠️ **Browser warnings** — automatic in-page alerts when visiting potentially unsafe sites
- 📊 **Community reports** — trending scams surfaced from real user reports
- 👤 **User profiles** — track your reports and see your impact on the community
- 🤖 **Smart detection** — flags urgency language, lookalike domains, URL shorteners, OTP phishing, and more

---

## Getting Started

### Backend API
```bash
cd backend-api
./mvnw spring-boot:run
```

### Frontend Web
```bash
cd frontend-web
npm install
npm run dev
```

### Mobile App
```bash
cd mobile-app
bun install
bun run dev
```

### Browser Extension
1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `browser-extension` folder

---

