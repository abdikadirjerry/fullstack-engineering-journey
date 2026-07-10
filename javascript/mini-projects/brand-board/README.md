# BrandBoard 🎨

A lightweight, local client asset manager built for freelance designers and developers. BrandBoard allows you to save client names alongside their primary, secondary, and accent color palettes.

## Features

- **Modular Architecture:** Built with a clean separation of concerns across UI, State, Storage, and Utility logic.
- **One-Click Copy:** Click on any color block to instantly copy its HEX code to your clipboard.
- **Persistent Storage:** Uses browser `localStorage` so your client boards remain saved even after refreshing the page or closing the browser.
- **Responsive Grid:** Automatically adjusts the layout of brand cards based on the screen size.

## Tech Stack

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)

## How to Use

1. Open `index.html` in your web browser.
2. Enter the Client or Project Name in the input field.
3. Use the color pickers to select the Primary, Secondary, and Accent colors.
4. Click **Save Brand Identity**.
5. To copy a hex code, simply click on the colored block on the generated card.
6. To delete a board, click the red **×** button on the top right of the card.

## File Structure

\`\`\`text
brand-board/
├── css/
│ └── style.css
├── js/
│ ├── app.js  
│ ├── state.js  
│ ├── storage.js  
│ └── clipboard.js  
├── index.html
└── README.md
\`\`\`
