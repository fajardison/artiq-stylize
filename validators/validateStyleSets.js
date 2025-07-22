import resolveStyle from '../resolves/resolveStyle.js'

/**
 * Validates an array of style sets, ensuring each set is a non-empty array of valid style strings.
 *
 * @param {Array<Array<string>>} styleSets - The array of style sets to validate.
 * @throws {TypeError} If styleSets is not an array or contains non-array elements.
 * @throws {Error} If styleSets or any of its sets are empty.
 * @throws {TypeError} If any style in a set is not a non-empty string.
 * @throws {Error} If any style string is not resolvable via resolveStyle.
 */
function validateStyleSets(styleSets) {
  if (!Array.isArray(styleSets)) {
    throw new TypeError(`styleSets must be an array, received: ${typeof styleSets}`);
  }

  if (styleSets.length === 0) {
    throw new Error('styleSets must not be empty');
  }

  for (const [index, set] of styleSets.entries()) {
    if (!Array.isArray(set)) {
      throw new TypeError(`Item at index ${index} must be an array, received: ${typeof set}`);
    }
    if (set.length === 0) {
      throw new Error(`Style set at index ${index} must not be empty`);
    }

    for (const style of set) {
      if (typeof style !== 'string' || !style.trim()) {
        throw new TypeError(
          `Style in set at index ${index} must be a non-empty string, received: ${typeof style}`
        );
      }

      resolveStyle(style);
    }
  }
}

export default validateStyleSets;
