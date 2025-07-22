import ansiCodes from '../constants/ansiCodes.js';
import isRGBValid from '../utils/isRGBValid.js';
import hexToRgb from '../utils/hexToRgb.js';

/**
 * Resolves a style string into a corresponding ANSI escape code.
 *
 * Supported formats:
 * - Named ANSI styles (e.g., 'bold', 'bgRed', 'brightBlue', etc.)
 * - RGB foreground: rgb(r, g, b)
 * - RGB background: bgRgb(r, g, b)
 * - Hex foreground: #rrggbb
 * - Hex background: bg#rrggbb
 *
 * @param {string} style - The style identifier to resolve.
 * @returns {string} An ANSI escape sequence for the given style.
 * @throws {TypeError} If the style is not a non-empty string.
 * @throws {Error} If the style value is invalid or not recognized.
 */
function resolveStyle(style) {
  if (typeof style !== 'string' || !style.trim()) {
    throw new TypeError(`Style must be a non-empty string. Received: ${typeof style}`);
  }

  const trimmedStyle = style.trim();

  // rgb(n,n,n)
  const rgbMatch = trimmedStyle.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
  if (rgbMatch) {
    const rgb = rgbMatch.slice(1).map(Number);
    if (rgb.some(n => !Number.isInteger(n)) || !isRGBValid(...rgb)) {
      throw new Error(`Invalid RGB value: ${trimmedStyle}`);
    }
    return `\x1b[38;2;${rgb.join(';')}m`;
  }

  // bgRgb(n,n,n)
  const bgRgbMatch = trimmedStyle.match(/^bgRgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
  if (bgRgbMatch) {
    const rgb = bgRgbMatch.slice(1).map(Number);
    if (rgb.some(n => !Number.isInteger(n)) || !isRGBValid(...rgb)) {
      throw new Error(`Invalid bgRgb value: ${trimmedStyle}`);
    }
    return `\x1b[48;2;${rgb.join(';')}m`;
  }

  // #rrggbb
  const hexMatch = trimmedStyle.match(/^#([a-fA-F0-9]{6})$/);
  if (hexMatch) {
    const rgb = hexToRgb(hexMatch[1]);
    if (!rgb) throw new Error(`Invalid HEX color code: ${trimmedStyle}`);
    return `\x1b[38;2;${rgb.join(';')}m`;
  }

  // bg#rrggbb
  const bgHexMatch = trimmedStyle.match(/^bg#([a-fA-F0-9]{6})$/);
  if (bgHexMatch) {
    const rgb = hexToRgb(bgHexMatch[1]);
    if (!rgb) throw new Error(`Invalid bgHEX color code: ${trimmedStyle}`);
    return `\x1b[48;2;${rgb.join(';')}m`;
  }

  // Named ANSI style
  if (!(trimmedStyle in ansiCodes)) {
    const suggestions = Object.keys(ansiCodes)
      .filter(k => k.startsWith(trimmedStyle.slice(0, 2)))
      .slice(0, 3);

    const suggestionMsg = suggestions.length
      ? `. Did you mean: ${suggestions.join(', ')}?`
      : '';

    const err = new Error(`Unknown style: '${trimmedStyle}'${suggestionMsg}`);
    err.code = 'STYLE_UNKNOWN';
    throw err;
  }

  return `\x1b[${ansiCodes[trimmedStyle]}m`;
}

export default resolveStyle;
