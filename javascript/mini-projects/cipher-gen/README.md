# CipherGen 🔐

A professional, locally-hosted secure password generator and strength evaluator. Managing sensitive credentials requires strict digital privacy, and CipherGen ensures that your generated passwords never leave your browser—no backend requests, no databases, just pure client-side JavaScript.

## Features

- **Granular Control Flow:** Customize password length (8 to 32 characters) and toggle specific character pools (uppercase, lowercase, numbers, symbols).
- **Live Strength Evaluation:** Dynamic logic that calculates password entropy and provides immediate visual feedback (Weak, Medium, Strong).
- **Secure Clipboard Utility:** One-click copy functionality to securely move the generated password to your encrypted vault or application.
- **Privacy-First Design:** 100% local execution. Dark mode aesthetic optimized for low eye strain.

## Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Dynamic UI)
- Vanilla JavaScript (ES6+, Control Flow, DOM Manipulation)

## How to Use

1. Open `index.html` in your web browser.
2. Use the slider to select your desired password length.
3. Toggle the checkboxes to include or exclude specific character types.
4. Click **Generate Password**.
5. Observe the strength meter to ensure the password meets your security requirements.
6. Click **Copy** to securely copy the password to your clipboard.

## File Structure

\`\`\`text
cipher-gen/
├── css/
│ └── style.css
├── js/
│ ├── app.js  
│ ├── generator.js  
│ ├── strength.js  
│ └── clipboard.js  
├── index.html
└── README.md
\`\`\`
