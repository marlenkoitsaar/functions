/**
 *
 * @param {string} word
 * @returns
 */
function addSpacesInFrontOfCapitalLetters(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    const isCapitalLetter = word[i].match(/[A-Z]/);
    result += isCapitalLetter ? ` ${word[i]}` : word[i];
  }

  return result;
}

const newWord = addSpacesInFrontOfCapitalLetters('camelCasingTestMe');
console.log({ newWord });
