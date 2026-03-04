# Landright Export – Next.js Landing Page

Next.js 14 app (App Router) with Tailwind CSS. Ready for **automatic deployment on Vercel**.

---

## Deploy on Vercel (automatic)

1. **Connect this repo to Vercel**
   - Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
   - Import your GitHub repository (this repo).
   - Vercel will detect Next.js from `package.json` and `vercel.json`.

2. **Use these settings** (usually auto-detected):
   - **Framework Preset**: Next.js
   - **Root Directory**: leave **empty** or set to `.`
   - **Build Command**: `npm run build` (default)
   - **Install Command**: `npm install` (default)
   - **Output Directory**: leave **empty** (Next.js uses `.next` automatically; do not set it in the UI)

3. **Deploy**
   - Click **Deploy**. Every push to the default branch will trigger a new deployment.
   - Preview deployments are created for other branches and pull requests.

### If you see 404 after deploy
   - In Vercel **Project Settings → General**: set **Root Directory** to `.` or leave empty.
   - Ensure **Framework Preset** is **Next.js**.
   - Leave **Output Directory** empty, then **Redeploy**.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## How this app works

- **Variant selection**: `app/page.tsx` picks one of 4 variants per visit (sessionStorage pool so each variant is shown once before any repeat).
- **Click tracking**: The wrapper in `app/page.tsx` sends a beacon to the Landright backend (`POST /beacon`) on button/link clicks; clicks are keyed by repo, layer, and variant_id.
- **The 4 variant files** (`app/variants/variant-1.tsx` … `variant-4.tsx`) are the page content; the root page handles selection and tracking.
