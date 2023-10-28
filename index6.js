/**
 *
 * @param {number} number
 */
function sumOfDigits(num) {
  const numString = String(num);
  let total = 0;
  for (let i = 0; i < numString.length; i++) {
    total += Number(numString[i]);
  }
  return total;
}

const a = sumOfDigits(4912);
console.log({ a });
