/**
 * Checks if the given RGB values are valid integers between 0 and 255.
 *
 * @param {number} r - Red component.
 * @param {number} g - Green component.
 * @param {number} b - Blue component.
 * @returns {boolean} True if all values are valid RGB integers, false otherwise.
 */
function isRGBValid(r, g, b) {
  return [r, g, b].every(v => Number.isInteger(v) && v >= 0 && v <= 255);
}

export default isRGBValid;
