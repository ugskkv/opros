/**
 * Югория brand design tokens.
 *
 * Single source of truth for the Югория corporate palette and typography.
 * All MUI themes in the monorepo (shared `packages/ui` themes, the
 * `cc-cmi5-player` themes and the `rapid-cmi5-electron-frontend` themes)
 * import from here so a single edit re-brands every surface of the app.
 *
 * Source palette (corporate SCSS variables):
 *   $body-bg              #ffffff
 *   $font-color           #333333
 *   $bg-color             #004990   (brand blue)
 *   $additional-bg-color  #d6e6fc
 *   $error-color          #e32636
 *   $success-color        #00c851
 *   $warning-color        #ff7733
 *   $neutral-color        #e2e1ec
 *   $menu-item-color      #dbe1ff
 *   $menu-item-shadow     #4c4e646b
 */

// ---------------------------------------------------------------------------
// Core brand colors
// ---------------------------------------------------------------------------

/** Primary brand blue — buttons, links, active accents. */
export const YG_BRAND_BLUE = '#004990';
/** Brighter accent blue — hover / secondary accent. */
export const YG_ACCENT_BLUE = '#0054e6';
/** Active / link blue. */
export const YG_LINK_BLUE = '#3259e7';
/** Light blue tint — selected tabs, subtle fills. */
export const YG_BLUE_TINT = '#d6e6fc';

/** Body / paper background. */
export const YG_WHITE = '#ffffff';
/** Page background gray. */
export const YG_PAGE_GRAY = '#f7f7f9';
/** Neutral borders / dividers. */
export const YG_BORDER = '#e2e1ec';
/** Neutral surface. */
export const YG_NEUTRAL = '#e2e1ec';

/** Dark body text. */
export const YG_TEXT_DARK = '#272727';
/** Default font color. */
export const YG_TEXT = '#333333';
/** Subdued text gray. */
export const YG_TEXT_MUTED = '#5d5e67';
/** Disabled text. */
export const YG_TEXT_DISABLED = '#c6c6c6';
/** Muted icon gray. */
export const YG_ICON_MUTED = '#8f9bb3';

export const YG_ERROR = '#e32636';
export const YG_SUCCESS = '#00c851';
export const YG_WARNING = '#ff7733';

// Menu / notification helpers
export const YG_MENU_ITEM = '#dbe1ff';
export const YG_MENU_ITEM_SHADOW = '#4c4e646b';
export const YG_NOTIF_INFO = '#638aff';
export const YG_NOTIF_INFO_BG = '#eff2ff';
export const YG_NOTIF_WARN = '#ffaa00';
export const YG_NOTIF_WARN_BG = '#ffc94d';
export const YG_NOTIF_ERROR = '#ff3d71';
export const YG_NOTIF_SUCCESS = '#2ce59b';
export const YG_NOTIF_SUCCESS_BG = '#effff4';

// ---------------------------------------------------------------------------
// Dark-mode derivatives (used only by the dark themes)
// ---------------------------------------------------------------------------
export const YG_DARK_BG = '#1a1c22';
export const YG_DARK_PAPER = '#23262e';
export const YG_DARK_SURFACE = '#2b2f38';
export const YG_DARK_BORDER = '#3a3f4a';
export const YG_DARK_PRIMARY = '#4f8bff'; // lighter brand blue for contrast on dark

// ---------------------------------------------------------------------------
// Typography — Unbounded (headings) + Montserrat (body/UI)
// ---------------------------------------------------------------------------
export const YG_FONT_HEADING = "'Unbounded'";
export const YG_FONT_BODY = "'Montserrat'";

/** Full CSS font-family stack for body/UI text. */
export const YG_FONT_FAMILY = [
  YG_FONT_BODY,
  YG_FONT_HEADING,
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

/** Full CSS font-family stack for headings. */
export const YG_FONT_FAMILY_HEADING = [
  YG_FONT_HEADING,
  YG_FONT_BODY,
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

/** MUI typography override block that applies Unbounded to h1-h6. */
export const YG_TYPOGRAPHY = {
  fontFamily: YG_FONT_FAMILY,
  h1: { fontSize: 36, fontFamily: YG_FONT_FAMILY_HEADING, fontWeight: 600 },
  h2: { fontSize: 28, fontFamily: YG_FONT_FAMILY_HEADING, fontWeight: 600 },
  h3: {
    fontSize: 24,
    fontFamily: YG_FONT_FAMILY_HEADING,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 20,
    fontFamily: YG_FONT_FAMILY_HEADING,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 18,
    fontFamily: YG_FONT_FAMILY_HEADING,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 16,
    fontFamily: YG_FONT_FAMILY_HEADING,
    fontWeight: 'bold',
  },
  button: { fontWeight: 'bold' },
};
