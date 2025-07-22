import isRGBValid from './isRGBValid.js';

/**
 * Converts a 6-digit hexadecimal color code into an RGB array.
 *
 * @param {string} hex - A 6-character hexadecimal string (e.g., 'ff00aa').
 * @returns {number[]} An array of RGB values in the format [r, g, b].
 * @throws {Error} If the hex format is invalid or results in invalid RGB values.
 */
function hexToRgb(hex) {
  if (!/^[a-fA-F0-9]{6}$/.test(hex)) {
    throw new Error(`Invalid HEX format: ${hex}`);
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  if (!isRGBValid(r, g, b)) {
    throw new Error(`HEX value produces invalid RGB: ${hex}`);
  }

  return [r, g, b];
}

export default hexToRgb;
