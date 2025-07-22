/**
 * ANSI style codes mapping for basic text formatting.
 *
 * Keys represent style names; values are corresponding ANSI codes.
 * Used to build ANSI escape sequences for terminal styling.
 */
const styleCodes = {
  reset: '0',
  bold: '1',
  dim: '2',
  italic: '3',
  underline: '4',
  inverse: '7',
  hidden: '8',
  strikethrough: '9'
};

export default styleCodes;
