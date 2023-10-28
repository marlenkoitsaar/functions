/**
 *
 * @param {string} word
 * @param {string} end
 */
function wordEndsWith(word, end) {
  const endLength = end.length;
  const wordEnd = word.slice(-endLength);
  return wordEnd === end;
}

const a = wordEndsWith('abc', 'bc');
console.log({ a });
