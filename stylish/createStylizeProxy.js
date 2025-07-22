import wrapAnsi from '../wrappers/wrapAnsi.js'

/**
 * Creates a proxy that allows chaining style names and applying them to a given text.
 *
 * Example:
 *   const stylize = createStylizeProxy();
 *   const styledText = stylize.red.bold.underline('Hello');
 *   // Applies red, bold, and underline styles to "Hello"
 *
 * @param {string[]} applied - An array of accumulated style names.
 * @returns {Proxy} A proxy function allowing chained style access and application.
 */
function createStylizeProxy(applied = []) {
  return new Proxy(() => {}, {
    // Capture property access like .red or .bold
    get(_, style) {
      return createStylizeProxy([...applied, style]);
    },
    // Apply collected styles to the text when the proxy is called like a function
    apply(_, __, [text]) {
      return wrapAnsi(applied, text);
    }
  });
}

export default createStylizeProxy;
