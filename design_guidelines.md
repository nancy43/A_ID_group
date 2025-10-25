# Design Guidelines: American ID Group Website Redesign

## Design Approach
**Selected Approach**: Healthcare-focused design system drawing from modern medical platforms (One Medical, Mayo Clinic, Cleveland Clinic)
**Core Principle**: Professional credibility meets approachable, patient-centered care

## Typography System

**Primary Font**: Inter or Source Sans Pro via Google Fonts
- Headings: 600-700 weight, clear hierarchy
- Body: 400 weight for readability, 500 for emphasis
- Medical terminology: Consider subtle monospace accents for clinical precision

**Type Scale**:
- Hero headline: text-5xl to text-7xl
- Section headings: text-3xl to text-4xl
- Service titles: text-2xl
- Body text: text-base to text-lg (larger for medical content readability)
- Small print/disclaimers: text-sm

## Layout & Spacing System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-6 to gap-8
- Card padding: p-6 to p-8
- Micro-spacing: space-y-4 for text stacks

**Container Strategy**:
- Max-width: max-w-7xl for main content areas
- Service cards: max-w-6xl with grid layouts
- Text content: max-w-3xl for optimal reading

## Component Library

### Navigation
- Clean, sticky header with logo left, nav center, CTA buttons right
- Primary CTAs: "New Patient Registration" and "Patient Login" in header
- Mobile: Hamburger menu with clear hierarchy
- Include emergency contact prominence

### Hero Section
**Large hero image required**: Professional medical environment showing care, technology, or healing
- Full-width hero with overlay gradient for text legibility
- Height: min-h-screen on desktop, min-h-[600px] on mobile
- Headline: "Expert Infection Care When You Need It Most"
- Subheadline emphasizing quick appointments and comprehensive treatment
- Dual CTAs: "Schedule Consultation" (primary) + "Learn About Our Services" (secondary)
- Buttons with backdrop-blur-md backgrounds for readability over image

### Services Grid Section
**6-column responsive grid** (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each service card with:
  - Icon or illustrative element at top
  - Service title (text-xl font-semibold)
  - 2-3 sentence description
  - "Learn More" link with arrow
- Cards: rounded-xl with subtle shadow, hover:shadow-lg transition
- Padding: p-8 per card
- Spacing: gap-8 between cards

### About Section
**Two-column layout** (image left, content right on desktop)
- Professional team photo or modern facility image
- Mission statement and key differentiators
- Stats row: "365 Days/Year", "Expert Team", "Advanced Treatments" as badge elements
- Trust indicators: certifications, years of experience

### Service Detail Cards (Expanded)
For each of the 6 services, create rich detail cards:
- **IV Infusion Center**: Medical professional with IV equipment image
- **Wound Care**: Caring nurse with patient image
- **Clinic Consultations**: Doctor consultation setting
- **Longitudinal Care**: Long-term relationship visual
- **Hospital Consultations**: Hospital critical care setting
- **Travel Vaccines**: Travel/global health imagery

Each with: Icon, headline, 3-4 bullet points of benefits, imagery, CTA button

### Location & Contact Section
**Three-column layout**:
- Column 1: Office hours with icon
- Column 2: Contact methods (phone, fax, email) with click-to-call/email
- Column 3: Address with "Get Directions" button
- Full-width map integration below (Google Maps embed placeholder)
- Highlight: "Infusion Clinic Open 365 Days a Year"

### Footer
**Multi-column comprehensive footer**:
- Column 1: Logo + tagline
- Column 2: Quick links to all services
- Column 3: Patient resources (registration, login, privacy)
- Column 4: Contact info recap
- Bottom bar: Copyright, privacy policy, accessibility statement
- Include social proof: "Trusted by thousands of patients across [region]"

## Images Strategy

**Required Images**:
1. **Hero**: Large, inspiring image of medical care - showing compassionate doctor-patient interaction or modern medical facility (full-width, ~800px height)
2. **Service Cards**: 6 distinct images representing each service area (400x300px aspect)
3. **About Section**: Professional team photo or state-of-the-art facility (600x400px)
4. **Credibility Elements**: Certification badges, partner hospital logos

**Image Treatment**: Subtle overlays on hero, clean presentation elsewhere. All images should convey trust, expertise, and modern medical care.

## Visual Hierarchy Principles

**Trust Building Elements**:
- Prominent display of credentials and expertise
- Clear service categorization
- Accessible contact methods throughout
- Emergency care messaging where appropriate

**Call-to-Action Hierarchy**:
1. Primary: Schedule/Register (present in header and hero)
2. Secondary: Service exploration
3. Tertiary: Patient login, additional resources

## Accessibility Requirements
- WCAG 2.1 AA compliance minimum
- High contrast ratios for medical terminology
- Clear focus states for keyboard navigation
- Readable font sizes (minimum 16px body)
- Alt text for all medical imagery
- Form labels and error states clearly defined

## Responsive Behavior
- Mobile-first approach with touch-friendly targets
- Service grid: 1 column mobile → 2 tablet → 3 desktop
- Hero text sizing scales appropriately
- Contact information easily accessible on mobile
- Click-to-call/email on mobile devices
- Hamburger menu with full-screen overlay for mobile navigation

## Animation & Interaction (Minimal)
- Subtle fade-in on scroll for service cards
- Smooth transitions on hover states (shadow, scale)
- No distracting medical-themed animations
- Professional, understated interactions that build confidence