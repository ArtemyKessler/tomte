export const isArrayAndNotEnempty = (valueToCheck) => {
  let answer = false;
  if (Array.isArray(valueToCheck)) {
    if (valueToCheck.length > 0) {
      answer = true;
    }
  }
  return answer;
};
