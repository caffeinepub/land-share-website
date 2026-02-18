# Specification

## Summary
**Goal:** Create a simple, responsive informational website in clear English that presents the owners’ claim to a rightful share of a land property, including references and a visible disclaimer.

**Planned changes:**
- Build a responsive single-page (or small multi-page) site with sections: Intro/Summary, About the Owners (siblings), Property Overview, Claim Summary (including undisputed/disputed context), Contact.
- Implement a single structured content file that drives all main site text so updates don’t require layout/component edits.
- Add a “Documents / References” section that lists static-asset document links with title, optional date, and description, including an English empty state when none are provided.
- Add a visible disclaimer stating the site is informational only, not legal advice, and reflects the owners’ position.
- Apply a consistent formal visual theme (colors/typography/spacing) avoiding primarily blue/purple palettes.
- Add and reference generated static images from `frontend/public/assets/generated` including a visible hero image and a favicon.

**User-visible outcome:** Visitors can view a formal, mobile-friendly claim information site with clear sections, document/reference links (or an empty-state message), a prominent disclaimer, and consistent styling; owners can update the site’s text via a single content file.
