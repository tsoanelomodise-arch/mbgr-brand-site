

# Add Client Testimonials Section

## Overview

Create a new "Client Testimonials" section with three testimonial cards featuring AI-generated client faces (round avatars), mock names, and quotes about the vehicle replacement experience. Add a corresponding navigation link in the Navbar.

## Section Design

The section will sit between Brands and Territories (or after Services), following the existing design language:

- Gold accent bar + heading: "What Our Clients Say"
- Three testimonial cards in a responsive grid (3 columns on desktop, stacked on mobile)
- Each card features:
  - Round avatar image (AI-generated face via placeholder service like `ui-avatars.com` or `randomuser.me` photos)
  - Client name and a short role/context line (e.g., "Policy Holder, Johannesburg")
  - Star rating (5 gold stars)
  - Testimonial quote text
- Cards use the same `Card` component with hover effects matching the rest of the site

## Mock Testimonials

1. **Thabo Molefe** - "MBG made the entire vehicle replacement process seamless. Within days of my write-off, I had a brand-new like-for-like replacement delivered to my door."
2. **Sarah van der Merwe** - "I was dreading the insurance process, but MBG handled everything. The courtesy car kept me mobile, and my new vehicle arrived faster than I expected."
3. **Nkosi Dlamini** - "Professional, efficient, and genuinely caring. MBG ensured my finance agreement continued smoothly and the delivery was flawless."

## Avatar Images

Will use `https://randomuser.me/api/portraits/` for realistic placeholder faces, or generate simple colored avatar circles with initials as fallback using the existing Avatar component.

## Technical Changes

### 1. New file: `src/components/Testimonials.tsx`
- Create component following the same pattern as other sections (intersection observer for animation, Card components, gold accent styling)
- Use Avatar component for round client photos
- Include star ratings using lucide-react `Star` icon
- Section id: `testimonials`

### 2. Update: `src/components/Navbar.tsx`
- Add "Testimonials" to the `navLinks` array: `{ label: "Testimonials", id: "testimonials" }`
- Also add it to the mobile navigation menu

### 3. Update: `src/pages/Index.tsx`
- Import the new `Testimonials` component
- Place it after `Services` and before `Brands` in the page layout

