# PORTFOLIO / Systems with a pulse

A cinematic portfolio for a data engineer who believes reliable systems deserve a sharp interface.

This is a dark, responsive portfolio built around a cursor-controlled, scroll-scrubbed video background and résumé-grounded storytelling.

## The Signal

- **Cinematic video engine** — cursor position and Lenis scroll progress drive the background MP4 through a smooth RAF/LERP seek loop.
- **Editorial hero** — Oswald headlines, outlined name watermark, telemetry metrics, and focused calls to action.
- **Systems archive** — projects and skills shaped around ETL, HPCC ECL, Python, Talend, MySQL, Databricks, PySpark, and data reliability.
- **Career timeline** — work experience and education combined into a filterable neon-spine journey.
- **Credential orbit** — draggable 3D certification cylinder with inertia, auto-spin, pagination, and verification modal.
- **Responsive by default** — mobile drawer navigation, touch-safe gallery dragging, and viewport-safe hero composition.
- **Contact channel** — FormSubmit integration, copy-to-clipboard email action, and social links.

## Built With

- Next.js 14 App Router
- TypeScript
- React
- Tailwind CSS
- Lenis smooth scrolling
- Lucide icons
- CSS 3D transforms and pointer events

## Run Locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npx tsc --noEmit
npm run build
npm start
```

## Project Map

```text
src/
  app/
    page.tsx                 # Page composition
    layout.tsx               # Metadata and global styles
    globals.css              # Core design system and effects
    hero-frame.css           # Hero overflow and watermark sizing
    hero-position.css        # Hero spacing and vertical flow
    nav-alignment.css        # Navigation tab alignment
    scroll-overrides.css     # Lenis scroll behavior override
    video-visibility.css     # Background contrast tuning
  components/
    CinematicVideo.tsx       # Cursor + scroll video engine
    LenisProvider.tsx        # Inertial scrolling loop
    CustomCursor.tsx         # Desktop cursor system
    Navbar.tsx               # Navigation and active section state
    sections/                # Hero, About, Experience, Projects, Skills,
                              # Certifications, and Contact
public/
  video/portfolio-background.mp4
  [Your_Name]_Resume_2026.pdf
docs/
  Portfolio_Prompt_Playbook_Generic.pdf
```

## Runtime Assets

The background video and résumé are intentionally kept in `public/` so they are served directly by Next.js:

- `/video/portfolio-background.mp4`
- `/[Your_Name]_Resume.pdf`

Keep these paths stable when deploying.

## Contact Form

The contact form uses FormSubmit and sends submissions to the configured portfolio email. FormSubmit may require a one-time activation confirmation for the recipient address. Check the inbox and spam folder after the first test submission.

## Deploy

The project is ready for free deployment on Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Every future push can trigger a fresh deployment automatically.

## Prompt Playbook

The repository includes a reusable implementation guide with build prompts, QA prompts, deployment prompts, résumé-upload workflow, and visual guidance:

[Open the generic portfolio prompt playbook](docs/Portfolio_Prompt_Playbook_Generic.pdf)

## Notes for Contributors

- Treat the uploaded résumé as the source of truth for personal data.
- Keep the cinematic engine seek-safe and RAF-driven.
- Avoid dynamic blur or expensive work inside continuous animation loops.
- Preserve `touch-action: pan-y` on draggable mobile surfaces.
- Run the typecheck and production build before pushing.

---

Built with curiosity, restraint, and a little red light.
