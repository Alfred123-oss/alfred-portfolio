# Alfred Giranyutha — Professional Portfolio

A responsive React + Vite portfolio website with a navy, blue, and white technology design.

## Run locally

1. Install Node.js (use a current LTS release).
2. Open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed in the terminal.

## Build for hosting

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## Personalize before publishing

- Add `public/Alfred-Giranyutha-CV.pdf` to enable the CV download.
- Optionally add `public/profile.jpg` and update the About section to use your photo.
- Add LinkedIn and GitHub URLs in the `profile` object in `src/App.jsx`.
- Verify dates, job responsibilities, academic details, leadership titles, and project statuses.
- Add only real project photos, certificates, reports, source-code links, and measured outcomes.
- Do not publish confidential records or private contact information you do not want public.

## Deploy to Vercel

1. Create a GitHub repository and upload/push this project.
2. Sign in to Vercel using GitHub.
3. Choose **Add New → Project** and import the repository.
4. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
5. Deploy. Vercel will provide a public URL.

No backend or database is required for this version.
