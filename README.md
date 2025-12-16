## Wedding Save the Date Site

A simple, elegant single-page "Save the Date" website with an RSVP form and calendar links.

Open `index.html` directly in your browser, or upload the `save-the-date` folder to any static host (GitHub Pages, Netlify, Vercel, etc.).

---

### Customize the Details

- **Names**
  - Edit the names in `index.html`:
    - Main title (`Clara & Alex`)
    - Footer names (`Clara & Alex`)

- **Date & Location (displayed on the page)**
  - In `index.html`, update:
    - Main date text (`September 20, 2026`)
    - Location (`San Francisco, California`)
    - Any times or details in the "Our Day" and "Travel & Stay" cards.

- **Date & Time (calendar links)**
  - In `script.js`, near the top of `setupCalendarLinks()`:
    - Update `title`, `description`, and `location`.
    - Adjust `start` and `end` if your date/time differ:
      - Format: `YYYYMMDDTHHmmssZ` (UTC).
      - Example: `20260920T153000Z` is 2026-09-20 15:30 UTC.

---

### RSVP Form Behavior

Right now the RSVP:

- Validates required fields (name, email, attending).
- Shows success/error messages.
- Logs the RSVP data to the browser console for privacy and testing.

To receive RSVPs for real, you have three main options:

1. **Connect to a form service (no backend needed)**
   - Services like Formspree or Basin give you a URL to `POST` your form to.
   - In `script.js`, inside the `form.addEventListener("submit", ...)` handler, replace the `console.log(...)` with a `fetch("YOUR_FORM_ENDPOINT", { method: "POST", body: formData })` call.

2. **Use a Google Form**
   - Create a Google Form with fields you want.
   - Either link the "RSVP" button to the form, or embed the form instead of the custom fields.

3. **Custom backend**
   - If you have your own server, send `fetch` requests from the submit handler to your API and store RSVPs in a database or email them.

---

### Files Overview

- `index.html` – Main page structure and content.
- `styles.css` – Styling, colors, layout, and typography.
- `script.js` – RSVP form validation/behavior and calendar link generation.
- `README.md` – This guide.

---

### Quick Start

1. Open `/Users/cb/Documents/save-the-date/index.html` in your browser.
2. Confirm the layout looks good.
3. Edit names, date, and location as needed.
4. (Optional) Connect the form to a real RSVP destination as described above.


