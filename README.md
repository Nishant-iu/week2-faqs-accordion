# Week 2 — Interactive FAQ Accordion

## Overview
A responsive FAQ accordion built with semantic HTML, CSS and vanilla JavaScript. It demonstrates DOM manipulation, event handling, accessibility, responsive design and defensive coding.

## Files
- `index.html` — semantic markup and FAQ content.
- `style.css` — component design, focus/hover states, mobile layout and fallback styling.
- `script.js` — accordion interaction, event delegation, ARIA updates and error checks.

## How to run and test
1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, Firefox or Safari. No installation is required.
3. Click a question. Its answer should open; clicking another question closes the previous answer.
4. Use Tab to focus questions, then Enter or Space to activate them.
5. Resize the browser to check the responsive layout.
6. Disable JavaScript to confirm answers remain readable.

## Accessibility and maintainability
- Native buttons support keyboard operation.
- `aria-expanded`, `aria-controls`, and labelled answer regions communicate state and relationships.
- Visible focus styling helps keyboard users.
- Event delegation keeps click handling in one place.
- Defensive checks log warnings and disable a question if its answer panel is missing.
- If JavaScript is unavailable, the fallback keeps the FAQ answers visible.

## Customisation
To add an FAQ, copy an `.faq-item` block, give the question button a unique `id`, and make its `aria-controls` value match the answer panel's unique `id`.
