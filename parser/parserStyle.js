import styleModes from '../constants/styleModes.js';

/**
 * Splits a given string into segments based on the selected style mode.
 *
 * Supported modes:
 * - 'line'     : Splits text by universal line breaks (Windows, Linux, macOS).
 * - 'sentence' : Splits text by sentence endings (., !, ?) or isolated newlines.
 * - 'word'     : Splits text by spaces while preserving them.
 * - 'char'     : Splits text into individual characters.
 *
 * @param {string} text - The input text to be parsed.
 * @param {string} [mode='char'] - The mode to use for parsing.
 * @returns {string[]} An array of text segments based on the specified mode.
 * @throws {TypeError} If the input is not a string.
 * @throws {RangeError} If an invalid mode is provided.
 */
function parserStyle(text, mode = 'char') {
  if (typeof text !== 'string') {
    throw new TypeError(`Input text must be a string. Received: ${typeof text}`);
  }

  if (!styleModes.includes(mode)) {
    throw new RangeError(
      `Invalid mode '${mode}'. Use one of the following: ${styleModes.join(', ')}`
    );
  }

  const trimmed = text.trim();
  if (trimmed === '') {
    return [''];
  }

  switch (mode) {
    case 'line':
      // Split by universal line breaks (Windows, Linux, macOS)
      return text.split(/(\r?\n)/g);

    case 'sentence':
      // Match full sentences including punctuation and isolated newlines
      return text.match(/[^.!?\n]+[.!?]*|\n+/g) || [];

    case 'word':
      // Split by spaces while preserving them
      return text.split(/(\s+)/);

    case 'char':
      // Split into individual characters
      return [...text];

    default:
      throw new RangeError(`Unrecognized parsing mode: '${mode}'`);
  }
}

export default parserStyle;
