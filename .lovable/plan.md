# Hero, palette, and events refinement

## What will change
- Rebuild the opening section as a centered vertical composition: headline, copy, actions, and key figures first, followed by a wide responsive carousel.
- Give the carousel a cinematic landscape ratio that adapts from 16:9 on smaller screens toward 21:9 on wide screens, while preserving its controls, automatic rotation, and accessibility.
- Remove red and yellow typography accents throughout the page, using neutral text roles and cobalt as the single brand accent.
- Restyle Veranstaltungen from the isolated dark band into the same light, frosted card language used across the site, with consistent borders, corner radii, shadows, and responsive behavior.
- Keep event data in the typed mock `events` array, sort it by date, retain category filters, and extract the mapped markup into a reusable `EventCard` component.

## Technical details
- Update the homepage React structure and existing CSS tokens/styles only; no backend or content changes.
- Preserve reduced-motion behavior and test desktop and mobile layouts for overflow, readable image crops, filters, and carousel controls.
