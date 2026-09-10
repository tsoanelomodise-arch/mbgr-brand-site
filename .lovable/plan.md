# Design break banner after Our Services

Add a full-width visual banner between the Our Services section and Brands. No navigation item.

## What it looks like

- Full-bleed image of the woman in the pastel motion-blur crowd, cropped wide (short on mobile, taller on desktop).
- Bottom-left overlay text: **Replace. Reconnect. Keep Moving.** in bold white, with a thin gold vertical bar to its left.
- Soft dark gradient at the bottom of the image so the wording stays readable.
- Space reserved top-right for the round logo you will send later (left empty for now).
- Same scroll fade-in used by other sections.

## Content

Exact wording: `Replace. Reconnect. Keep Moving.`

## Technical notes

- New `src/components/Banner.tsx`, rendered in `src/pages/Index.tsx` after `<Services />`.
- Image: reuse the already uploaded hero image `AdobeStock_1771150921_Optimized.jpg`; no cropping or regeneration.
- Styling with existing tokens: white text, gold bar using the brand gold, bottom `bg-gradient-to-t from-black/60`, responsive heights (`h-[320px] md:h-[520px]`), `object-cover`.
- No changes to Navbar, other sections, or any logic.
