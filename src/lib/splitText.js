/**
 * Splits text into characters, words, and/or lines
 * @param {string} text - Text to be split
 * @param {Object} options - Splitting options
 * @param {boolean} options.chars - Split into characters
 * @param {boolean} options.words - Split into words
 * @param {boolean} options.lines - Split into lines
 * @param {string} options.charClass - Class for character wrapper (default 'split-char')
 * @param {string} options.wordClass - Class for word wrapper (default 'split-word')
 * @param {string} options.lineClass - Class for line wrapper (default 'split-line')
 * @returns {string} HTML string with split text
 */
export const splitText = (text, options = {}) => {
  const {
    chars = false,
    words = false,
    lines = false,
    charClass = 'split-char',
    wordClass = 'split-word',
    lineClass = 'split-line'
  } = options;

  let result = text;

  if (lines) {
    result = result.split('\n').map(line => 
      `<span class="${lineClass}">${line}</span>`
    ).join('');
  }

  if (words) {
    result = result.replace(/\S+/g, match => 
      `<span class="${wordClass}">${match}</span>`
    );
  }

  if (chars) {
    result = result.replace(/\S/g, match => 
      `<span class="${charClass}">${match}</span>`
    );
  }

  return result;
};