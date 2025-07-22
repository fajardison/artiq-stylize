import resolveStyle from '../resolves/resolveStyle.js'

/**
 * Wraps the given text with ANSI escape codes based on the provided style names.
 *
 * @param {string[]} styles - An array of style names to apply (e.g., ['bold', 'fgRed']).
 * @param {string} text - The text to be styled.
 * @returns {string} The text wrapped with the corresponding ANSI codes.
 */
function wrapAnsi(styles, text) {
  const ansi = styles.map(resolveStyle).join('');
  return `${ansi}${text}\x1b[0m`;
}

export default wrapAnsi;
