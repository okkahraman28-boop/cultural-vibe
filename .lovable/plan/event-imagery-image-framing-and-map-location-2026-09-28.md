# Event imagery, image framing, and map location

## What will change
- Give every Veranstaltung card its own distinct Unsplash placeholder image, with no repeated photography across the event list.
- Store the selected images with the project rather than relying on unstable image links, and provide descriptive alternative text for each.
- Tune the banner and event-card image frames to preserve faces and important subjects: use consistent landscape ratios, top or custom focal alignment where appropriate, and responsive crops on smaller screens.
- Update the footer map to pin **Krendelstraße 30A, 30916 Isernhagen, Germany** as its default view.
- Keep the map source deterministic so a full page reload always returns the iframe to that pinned address rather than retaining an explored position.

## Technical details
- Extend the existing typed mock event data with one unique imported image per event; the reusable `EventCard` mapping, chronological sorting, and category filters remain unchanged.
- Apply image focal-position rules through the existing semantic styling system, with per-image positioning only where the subject requires it.
- Replace the current placeholder map query and accessible title with the supplied Isernhagen address, using an encoded Google Maps embed URL.
- Verify desktop and mobile crops, all event images, map loading/default location, horizontal overflow, and current build diagnostics.
