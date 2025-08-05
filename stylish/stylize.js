import validateStyleSets from '../validators/validateStyleSets.js'
import validateStyleMode from '../validators/validateStyleMode.js'
import parserStyle from '../parser/parserStyle.js'
import createStylizeProxy from './createStylizeProxy.js'
import applyStyles from './applyStyles.js'

/**
 * Applies ANSI styles to segments of text based on the selected mode and style sets.
 *
 * @param {string} text - The input text to be styled.
 * @param {string[][]} styleSets - An array of style arrays (e.g., [['red'], ['green', 'bold']]).
 * @param {Object} [options] - Optional configuration.
 * @param {string} [options.style='word'] - The segmentation mode: 'line', 'sentence', 'word', or 'char'.
 * @param {boolean} [options.randomize=false] - If true, applies styles randomly to segments.
 * @returns {string} The stylized text with ANSI codes applied.
 *
 * Example:
 *   stylize('Hello World', [['red'], ['blue']], { style: 'word' });
 */
function stylize(text, styleSets = [['reset']], options = {}) {
  const { style = 'word', randomize = false } = options;

  validateStyleSets(styleSets);
  validateStyleMode(style);

  const pickStyle = i =>
    randomize
      ? styleSets[Math.floor(Math.random() * styleSets.length)]
      : styleSets[i % styleSets.length];

  const parts = parserStyle(text, style);
  return parts.map((part, i) => {
    return /^\s+$/.test(part) ? part : applyStyles(part, pickStyle(i));
  }).join('');

}

/**
 * Allows direct style chaining like: stylize.red.bold('text').
 */
export default new Proxy(stylize, {
  get(_, style) {
    return createStylizeProxy()[style];
  }
});
                    
