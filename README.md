# Patience Watimudhara — Personal Portfolio

A responsive personal portfolio built with **React + Vite**. It includes a persistent light/dark theme toggle, responsive mobile navigation, project filters, animated section reveals, a project showcase, skills, experience, education and recruiter-focused contact details.

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the default Vite settings. The build command is `npm run build` and the output directory is `dist`.
4. Deploy. No backend is required for this portfolio.

## Personalise before publishing

- **Profile photo:** The hero currently uses a typographic monogram so the design works without an image. To use a portrait, add it under `public/` and replace the monogram card in `src/App.jsx` with an `<img>` element. Use a professional, well-lit headshot.
- **Contact details:** Update the `EMAIL`, `PHONE_PRIMARY`, `PHONE_SECONDARY` and `LINKEDIN` constants near the top of `src/App.jsx` if any details change.
- **Projects:** Update the `projects` array in `src/App.jsx` with new descriptions, links, technologies and project status. Add links to source repositories only when the repositories are public and ready to share.
- **CV:** Add your current CV as `public/Patience_Watimudhara_CV.pdf` and add a download link in the hero or contact section if you would like recruiters to download it.
- **Social links:** Add your GitHub profile URL once you have confirmed the exact public profile address.

## Project status accuracy

The Internship Management System is described as deployed with PostgreSQL integration still in progress. The School Management System is marked as in development. Keep these statuses accurate as the work progresses.

## Notes

- Theme selection is saved in browser local storage.
- The contact button opens the visitor's email application using a pre-filled subject. It does not send messages to a server.
- Google Fonts are loaded from Google Fonts; system font fallbacks are included.
- No analytics, tracking scripts, paid services or external UI libraries are required.
