
# Redesign the "About Us" Section

## Changes Overview

1. **Rename heading** from "WHO ARE WE" to "About Us"
2. **Remove the Dialog/Read More button** and display all content (Our Mission, Our Value Proposition, Why Choose Us) directly on the page
3. **Redesign the layout** to present the expanded content in a clean, visually appealing way

## Redesigned Layout

The section will flow as follows:

- **Section heading**: "About Us" with the gold accent bar
- **Intro paragraph**: The existing MBG Africa Holdings description
- **Three content cards in a grid**: Our Mission, Our Value Proposition, and Why Choose Us -- each displayed as a card with the gold CheckCircle icon, heading, and body text. On desktop these will show as a 3-column grid; on mobile they stack vertically.
- **Tagline banner**: "This is My Brand Group" with subtitle, displayed inline below the cards
- **Two-column cards**: The existing Industry Supply Spans and Vehicle Replacement Benefits cards remain unchanged

## Technical Details

**File: `src/components/About.tsx`**
- Remove Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, and Button imports (no longer needed)
- Change the h2 from `WHO ARE <span>WE</span>` to `About <span>Us</span>`
- Remove the Dialog block entirely (lines 47-115)
- Add a 3-column responsive grid (`grid md:grid-cols-3 gap-6`) with Card components for each of the three content sections (Our Mission, Our Value Proposition, Why Choose Us)
- Add the tagline "This is My Brand Group" as a centered text block below the cards
- Keep the existing Industry Supply and Benefits cards as-is
