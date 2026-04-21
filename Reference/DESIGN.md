# Design System Document

## 1. Overview & Creative North Star: "The Obsidian Architect"

The design system is built upon a philosophy of **The Obsidian Architect**. It moves away from the "busy" modular look of standard SaaS platforms to embrace a high-end, editorial aesthetic inspired by technical precision and late-night productivity. 

To achieve this, we reject standard "boxy" layouts. Instead of defining space with lines, we define it with light and density. The system breaks the template through **intentional asymmetry**, allowing large headlines to drive the layout, while technical data sits in quiet, glass-like containers. The goal is to make the user feel like they are interacting with a high-performance instrument—cold, sharp, and impeccably organized.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule

The color palette is anchored in a deep, nocturnal foundation, using cool-toned neutrals to create a sense of infinite space.

### The Foundation
*   **Surface Lowest (#0A0E1A):** The infinite canvas. Used for the base background of the application.
*   **Primary Accent (#4F8EF7):** The "Electric Teal-Blue." Use this sparingly for intent and action. It is a signal fire in the dark.

### The "No-Line" Rule
Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or tonal transitions.
*   **Nesting over Bordering:** A card (using `surface-container-low`) should sit on the main background (`surface`) to create a boundary.
*   **Depth through Tones:** Use the hierarchy of `surface-container-lowest` through `surface-container-highest` to create a "stacked" physical reality. Each inner container should be a tier higher than its parent to suggest it is closer to the user.

### Glassmorphism & Signatures
*   **The Glass Rule:** Floating elements (Modals, Popovers, Navigation Bars) must use `surface-variant` with a `backdrop-filter: blur(12px)` and an opacity of 60-80%.
*   **Signature Textures:** Main CTAs may use a subtle inner glow or a very soft vertical gradient from `primary` (#ACC7FF) to `primary-container` (#508FF8) to provide "soul" and professional polish, though the surface remains fundamentally solid.

---

## 3. Typography: Technical Authority

We use **Inter** exclusively to lean into its geometric, high-legibility DNA. The brand identity is conveyed through extreme contrast between "The Statement" (Display) and "The Data" (Labels).

*   **Display (lg/md/sm):** Heavy weight (Bold 700+). These are your anchors. They should be used with tight letter-spacing (-0.02em) to feel like a premium editorial header.
*   **Body (lg/md):** Regular weight (400). Increased line-height (1.6) is required to maintain the "Spacious" vibe.
*   **Labels (md/sm):** Medium weight (500). Used for technical metadata and UI controls. Often paired with `on-surface-variant` (#C2C6D5) to recede visually.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too heavy for this aesthetic. We achieve hierarchy through light and glass.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "lift" without needing a shadow.
*   **Ambient Shadows:** For floating components like dropdowns, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of "nothingness" rather than a dark grey shape.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a "Ghost Border": use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Interaction Glass:** When hovering over interactive surfaces, increase the backdrop-blur and slightly lighten the background color to simulate the glass being physically lifted closer to the eye.

---

## 5. Components: Precision Primitives

### Buttons
*   **Primary:** Solid `primary-container` (#508FF8) with `on-primary-fixed` text. No gradients. Border-radius: `md` (0.375rem).
*   **Secondary:** Ghost style. No background, `outline-variant` border at 20% opacity.
*   **Tertiary:** Pure text with `primary` color. Used for low-emphasis navigation.

### Cards & Lists
*   **Strict Rule:** No divider lines. Use vertical white space (32px or 48px from the spacing scale) or a shift from `surface` to `surface-container-low` to separate content blocks.
*   **Glass Cards:** Use for featured content. A very faint `outline-variant` (10% opacity) "Ghost Border" is permitted here to catch the "light" at the edge of the glass.

### Input Fields
*   **Surface:** `surface-container-highest` background.
*   **States:** On focus, the border does not change color; instead, a 1px `primary` shadow-ring appears, and the label moves with high-precision micro-animation.

### Additional Suggested Components
*   **The Command Bar:** A floating, glassmorphic central search/action hub (K-bar style). High blur, no border, floating at the top-center of the viewport.
*   **Status Beacons:** Instead of colorful icon circles, use small, glowing "pills" or 4px dots using the `primary` or `tertiary` (amber) tokens to indicate state.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a structural element. If a layout feels crowded, increase the padding—don't add a border.
*   **DO** use "Cool White" (`on-background`) for body text but "Muted Slate" (`on-surface-variant`) for secondary metadata to create a clear visual hierarchy.
*   **DO** align technical data (numbers, dates) to a monospaced feel using Inter's tabular font-feature settings.

### Don't
*   **DON'T** use "Colorful Icon Circles." Icons should be naked, using the `primary` or `on-surface` color directly against the background.
*   **DON'T** use "Drop Shadows" on cards that are part of the page flow. Only use shadows for elements that physically "float" over other content (Modals/Menus).
*   **DON'T** use 100% white (#FFFFFF). Always use the `on-background` (#DFE2F3) to prevent eye strain against the near-black background.