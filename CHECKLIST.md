# Solaaris Infinity Energy — Pre-Deployment Checklist

## 1. Assets (Required)

### Logo
- [x] Provide logo file — **PNG or SVG**, transparent background preferred
- [x] Place in: `solaaris/public/logo.png`
- [x] Replaced SVG placeholder in Navbar and Footer with real logo

### Favicon
- [ ] Provide a square version of the logo icon (just the infinity/sun mark)
- [ ] Ideal: **512×512px PNG** — Vercel/Next.js will handle resizing
- [ ] Replace: `solaaris/app/favicon.ico`

### OG Image (Social Share Preview)
- [ ] A **1200×630px banner image** shown when the site link is shared on WhatsApp, Instagram, etc.
- [ ] Should include logo + tagline — can be designed from the ad image you shared
- [ ] Place in: `solaaris/public/og-image.jpg`

---

## 2. Project Photos (Required for Gallery)

- [ ] Minimum **8–10 photos** of actual completed installations
- [ ] Formats: JPG or PNG, minimum 800px wide
- [ ] Place in: `solaaris/public/gallery/` (e.g., `project-1.jpg`, `project-2.jpg` ...)
- [ ] Currently showing Unsplash placeholder images — must be replaced before going live

---

## 3. Content Updates (Required)

### Real Testimonials
- [ ] 2–3 real customer quotes with:
  - Customer name (first name + last name)
  - City / town
  - System installed (e.g., "3kW On-Grid")
  - What they said (2–3 sentences)

### Stats — Confirm Accuracy
- [ ] Current values: **10+ installations, 50kW+, 10+ customers, 1+ year** — confirm or update

### WhatsApp Number — Confirm
- [ ] Confirm the correct number for the lead form WhatsApp submission
  - Currently set to: `9920439118` (was changed externally)
  - Bhardwaj's number: `7558410811`
  - Floating button & footer WhatsApp: `917558410811`
  - **Clarify which number leads should go to**

### Service Area
- [ ] Which cities / districts in Maharashtra do you serve?
  - To be added to the About / Why Us section for local SEO

---

## 4. Social Media Links (Required)

- [ ] **Instagram handle** — replace `href="#"` in Footer
  - Format: `https://www.instagram.com/your_handle`
- [ ] **Facebook page** (optional) — if available
- [ ] **YouTube channel** (optional) — if available

---

## 5. Domain & Deployment (Required)

### Vercel Setup
- [ ] Create a free account at [vercel.com](https://vercel.com) if not already done
- [ ] Push the `solaaris/` folder to a **GitHub repository**
- [ ] Import the repo on Vercel — it auto-detects Next.js

### GoDaddy Domain Linking
Once deployed on Vercel, follow these steps:
1. Go to Vercel → Project → Settings → Domains → Add your domain
2. Vercel will give you **2 DNS records** (an A record + CNAME)
3. Log in to GoDaddy → DNS Management → Add those records
4. Propagation takes **10–30 minutes**
- [ ] Domain name confirmed: ________________

---

## 6. SEO & Meta (Nice to Have)

- [ ] Confirm the page title: currently `"Solaaris Infinity Energy | Solar Solutions for Home & Business"`
- [ ] Confirm meta description — currently set, can be personalised
- [ ] Add Google Business Profile link to footer (once created)
- [ ] Add Google Analytics tracking ID (free, helps track visitors)

---

## 7. Optional Enhancements (Post-Launch)

- [ ] **Real UPI payment integration** — if paid consultations are planned (like Umar Solar)
- [ ] **Google Reviews button** — link to your Google Business listing
- [ ] **Blog section** — solar tips, subsidy updates (great for SEO long-term)
- [ ] **WhatsApp Business** — set up auto-reply for leads coming in after hours

---

## Quick Summary

| Item | Status |
|---|---|
| Logo file | ✅ Done |
| Favicon | ⏳ Pending |
| OG image | ⏳ Pending |
| Gallery photos (real) | ⏳ Pending |
| Real testimonials | ⏳ Pending |
| Instagram link | ⏳ Pending |
| WhatsApp lead number confirmed | ⏳ Pending |
| Vercel account + GitHub repo | ⏳ Pending |
| GoDaddy domain linked | ⏳ Pending |
| Stats confirmed | ⏳ Pending |
