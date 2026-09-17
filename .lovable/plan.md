# Homepage carousel and content separation

## What will change
- Replace the current static landing image with an accessible horizontal carousel featuring the current exhibition and upcoming events.
- Advance slides automatically every 5 seconds with a smooth transition; pause while hovered, focused, or when reduced motion is preferred.
- Add previous/next arrow controls, slide indicators, clear labels, and keyboard-accessible controls.
- Preserve the existing introduction, calls to action, and artwork-led visual style around the carousel.
- Rename and restructure the existing program area as a dedicated **Veranstaltungen** section, visually distinct from **Ausstellungen**.
- Update the main navigation and relevant links so visitors can jump directly to either section.

## Technical details
- Build the carousel as a focused React component using local state and effects, without adding another dependency.
- Reuse the existing exhibition and artist imagery as prototype slide artwork and supply descriptive alternative text.
- Add semantic design tokens and responsive styles for the carousel, controls, transitions, and the events layout.
- Respect `prefers-reduced-motion` and keep mobile layouts free of overflow.
- Verify the completed page on desktop and mobile, including auto-advance, arrows, dots, navigation anchors, and current build diagnostics.
