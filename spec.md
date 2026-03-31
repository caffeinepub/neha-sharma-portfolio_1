# Neha Sharma Portfolio

## Current State
The portfolio has a MediaKit section (id="media-kit") with a download button. App.tsx renders sections in order: Hero, About, Metrics, ViralHighlight, Performance, MediaKit, Collaborations, Stories, etc.

## Requested Changes (Diff)

### Add
- New `LoveSupport` component (`src/frontend/src/components/LoveSupport.tsx`) placed immediately after `<MediaKit />` in App.tsx
- Section id: `love-support`
- Heading text: "Your love means everything 💕" + subtext: "Here are some special moments that truly mean a lot to me."
- 3 video cards in a horizontal 3-column grid (desktop), 1-column stack (mobile)
- Each card: video element (click-to-play), overlay play button, soft rounded corners, subtle shadow, caption below
- Captions: "Forever grateful 💖", "My biggest support system ✨", "This means everything 🥺"
- Videos: placeholder slots (no src) — user will upload later
- Hover animation: slight zoom + glow, subtle heart emoji float
- Background: blush pink / beige gradient, consistent with site palette

### Modify
- `App.tsx`: import and render `<LoveSupport />` after `<MediaKit />`

### Remove
- Nothing

## Implementation Plan
1. Create `LoveSupport.tsx` with 3 placeholder video cards, section heading, hover animations using framer-motion
2. Update `App.tsx` to import and insert `<LoveSupport />` after `<MediaKit />`
3. Validate and deploy
