import createStylizeProxy from './createStylizeProxy.js'

/**
 * Applies a sequence of style names to the given text using a proxy-based stylizer.
 *
 * @param {string} text - The text to be styled.
 * @param {string[]} [styles=[]] - An array of style names to apply in order.
 * @returns {string} The styled text with the specified styles applied.
 */
function applyStyles(text, styles = []) {
  let styled = createStylizeProxy();
  for (const s of styles) styled = styled[s];
  return styled(text);
}

export default applyStyles;
