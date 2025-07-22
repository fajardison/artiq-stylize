/**
 * Combines all ANSI escape codes into a single object.
 *
 * Includes text styles, foreground colors, bright foreground colors,
 * background colors, and bright background colors.
 */
import styleCodes from './styleCodes.js';
import fgColorCodes from './fgColorCodes.js';
import brightFgColorCodes from './brightFgColorCodes.js';
import bgColorCodes from './bgColorCodes.js';
import brightBgColorCodes from './brightBgColorCodes.js';

const ansiCodes = {
  ...styleCodes,
  ...fgColorCodes,
  ...brightFgColorCodes,
  ...bgColorCodes,
  ...brightBgColorCodes
};

export default ansiCodes;
