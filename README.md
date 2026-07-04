# Mohsen Sami — Portfolio

A one-page developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.
Black / neon-green theme, light & dark mode toggle, animated terminal hero.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files land in `dist/` — deploy that folder to Vercel, Netlify,
Liara, or any static host.

## Project structure

```
├── index.html
├── src/
│   ├── App.jsx        # all page content & sections
│   ├── index.css      # theme tokens + Tailwind
│   └── main.jsx        # React entry point
├── public/
│   └── profile.png     # your profile photo (swap this file to change it)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customizing

- **Profile photo:** replace `public/profile.png` with your own image (same filename, or update the `src` in `App.jsx`).
- **Colors:** edit the CSS variables in `src/index.css` under `.theme-dark` / `.theme-light`.
- **Content:** experience, skills, and contact info live as plain arrays at the top of `src/App.jsx`.
