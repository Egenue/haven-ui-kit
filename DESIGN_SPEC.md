# Haven UI Design Package - Complete Specification

## 🎨 Design System

### Color Palette (All HSL)

**Background Gradient:**
- Cream: `hsl(42, 100%, 97%)` → `#FFFBEB`
- Pale Teal: `hsl(174, 100%, 94%)` → `#E6FFFA`
- Light Lavender: `hsl(270, 100%, 95%)` → `#F3E8FF`

**Primary Colors:**
- Teal Primary: `hsl(173, 80%, 32%)` → `#0D9488`
- Lavender Accent: `hsl(270, 91%, 75%)` → `#C084FC`
- Foreground: `hsl(180, 25%, 25%)` → Deep teal-gray

**Semantic Colors:**
- Muted: `hsl(42, 60%, 95%)`
- Border: `hsl(180, 30%, 90%)`
- Card: `#FFFFFF` at 80% opacity
- Destructive: `hsl(0, 84%, 60%)`

### Typography
- **Font Family:** Inter (weights: 400, 500, 600, 700)
- **Headings:** Font-weight 700, tight line-height
- **Body:** Font-weight 400-500, relaxed line-height
- **Small text:** Font-weight 500, uppercase for labels

### Spacing & Sizing
- **Border Radius:** Heavy (16-24px for cards, 12-20px for buttons)
- **Container Max Width:** 1280px (7xl)
- **Padding:** Generous (2-3rem on large screens, 1rem mobile)
- **Gap:** Consistent 1.5rem (24px) grid gaps

### Shadows (Soft & Warm)
- Small: `0 2px 8px rgba(13, 148, 136, 0.08)`
- Medium: `0 4px 16px rgba(13, 148, 136, 0.12)`
- Large: `0 8px 32px rgba(13, 148, 136, 0.16)`

### Glassmorphism Effect
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(13, 148, 136, 0.12);
}
```

---

## 📱 Component Inventory

### 1. Login Page
**Layout:** Centered card on gradient background
**Elements:**
- 🌸 Icon in gradient square (80x80px, border-radius 32px)
- "Haven" heading (3xl, bold)
- Tagline "A safe space for everyone" (muted)
- Password input (height 48px, rounded-2xl, glass effect)
- Hint text: "haven2025" (xs, muted)
- Submit button (gradient primary → accent, shadow-md)
- Footer: "Built with care" + 💜 (xs, muted, border-top)

**States:**
- Hover: Button shadow increases to shadow-lg
- Focus: Input ring with primary color
- Error: Toast notification (destructive variant)

---

### 2. Dashboard Layout

#### Sticky Navigation
**Height:** 64px
**Background:** Glass card with border-bottom
**Content:**
- Left: 🌸 icon (40x40px) + "Haven" title + "Admin Dashboard" subtitle
- Right: Logout button (outline, glass effect)

#### Welcome Section
**Card:** Glass, rounded-3xl, padding 8
**Content:**
- "Welcome back, Admin 👋" (2xl, bold)
- "Here's what's happening..." (muted)

#### Stat Cards (4 columns on desktop, 1 on mobile)
**Each card:**
- Gradient icon (48x48px, border-radius 32px) with lucide icon
- Title (sm, muted)
- Value (3xl, bold)
- Trend text (xs, muted)
- Hover: shadow-lg transition

**Gradient Combinations:**
- Total Reports: Primary → Accent
- Active Cases: Orange-400 → Red-400
- Resolved: Green-400 → Teal-400
- Avg Response: Purple-400 → Pink-400

#### Reports Table (2/3 width on desktop)
**Header:**
- "Recent Reports" title + subtitle
- Export button (outline, glass, with Download icon)

**Table:**
- Headers: ID, Type, Status, Date, Priority (xs, uppercase, muted)
- Row height: 64px
- Hover: subtle white background (30% opacity)
- Badges: Rounded-xl with soft colors:
  - Active: orange-100/orange-700
  - Resolved: green-100/green-700
  - Priority High: red-100/red-700
  - Priority Medium: yellow-100/yellow-700
  - Priority Low: blue-100/blue-700

#### Category Chart (1/3 width on desktop)
**Content:**
- Title + subtitle
- 4 horizontal progress bars with labels and counts
- Bar colors: primary, accent, orange-400, pink-400
- Height: 12px, rounded-full
- Background: white/50
- Bottom stats: Total count + description

---

## 🖼️ Figma-Ready Specifications

### Auto-Layout Stacks

**Login Card:**
```
Auto-layout Vertical
Padding: 48px
Gap: 32px
Border-radius: 24px
Background: white @ 80%
Blur: 16px
Shadow: 0 8 32 rgba(13,148,136,0.12)
```

**Dashboard Grid:**
```
Auto-layout Horizontal (responsive)
Gap: 24px
Columns: 4 (desktop), 2 (tablet), 1 (mobile)
```

**Stat Card:**
```
Auto-layout Vertical
Padding: 24px
Gap: 16px
Border-radius: 24px
Min-height: 160px
```

**Reports Table:**
```
Auto-layout Vertical
Padding: 24px
Gap: 24px
Border-radius: 24px
```

---

## 🎭 Interaction States

### Buttons
- **Default:** Gradient background, shadow-md
- **Hover:** Scale 1.01, shadow-lg, transition 200ms
- **Active:** Scale 0.98
- **Disabled:** Opacity 50%, cursor not-allowed

### Cards
- **Default:** Glass effect, shadow-md
- **Hover:** shadow-lg, transition 300ms ease

### Inputs
- **Default:** Glass effect, border white/40
- **Focus:** Ring 2px primary, border primary
- **Error:** Ring 2px destructive, border destructive

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | 1 column, stack all cards |
| Tablet | 768-1024px | 2 columns for stats, stack table/chart |
| Desktop | > 1024px | 4 columns for stats, 2/3 + 1/3 layout |

---

## 🌈 Icon & Emoji Usage

- **Logo Icon:** 🌸 (Cherry Blossom) - warmth, growth, safety
- **Navigation:** Lucide icons (Shield, AlertTriangle, CheckCircle, Clock, Download)
- **Emotions:** 👋 (welcome), 💜 (care), ✅ (success)

**Icon Gradients:**
```css
background: linear-gradient(135deg, 
  hsl(173, 80%, 32%) 0%, 
  hsl(270, 91%, 75%) 100%
);
```

---

## 🚀 Export Guide

### For Figma
1. Create frame: 1440x1024 (desktop), 375x812 (mobile)
2. Apply gradient background across entire frame
3. Use auto-layout for all cards and containers
4. Add glassmorphism effect via fill + blur
5. Export components as reusable variants

### For Penpot
1. Import this spec into Penpot
2. Create component library from stat cards, buttons, inputs
3. Use flex layout (equivalent to auto-layout)
4. Apply backdrop filter for glass effect

### For Development
- Tailwind classes already mapped in React components
- All colors defined as CSS custom properties
- Mobile-first responsive with breakpoint utilities
- Animations use transition-all with duration-200/300

---

## 🎯 Design Principles

1. **Warmth over Corporate:** Gradients, rounded corners, soft shadows
2. **Empathy First:** Welcoming copy, reassuring micro-interactions
3. **Privacy by Design:** Glass effects suggest transparency + protection
4. **Accessibility:** WCAG AA contrast, focus states, semantic HTML
5. **Never Surveillance:** No dark patterns, no intimidating blue, no rigid layouts

---

## 💡 Implementation Tips

- Use `backdrop-filter: blur(16px)` for glassmorphism (check browser support)
- Prefer CSS custom properties over hardcoded hex values
- Test gradients on both light and dark backgrounds
- Ensure emoji render consistently across platforms
- Add subtle animations on hover for delight (scale, shadow)

---

**Created for:** Haven 24-hour Hackathon
**Design Philosophy:** Mental health app meets modern SaaS
**Tone:** Feels like a warm hug 🤗
