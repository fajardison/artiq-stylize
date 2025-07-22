import styleModes from '../constants/styleModes.js'
import resolveStyle from '../resolves/resolveStyle.js'

/**
 * Validates whether the given mode is a supported text style mode.
 *
 * @param {string} mode - The style mode to validate.
 * @throws {TypeError} If the mode is not a string.
 * @throws {Error} If the mode is not included in the supported style modes.
 */
function validateStyleMode(mode) {
  if (typeof mode !== 'string') {
    throw new TypeError(`Mode must be a string, received: ${typeof mode}`);
  }

  if (!styleModes.includes(mode)) {
    throw new Error(
      `Invalid style mode: '${mode}'.\n` +
      `Supported modes are: ${styleModes.join(', ')}`
    );
  }
}

export default validateStyleMode;
