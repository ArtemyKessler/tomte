export const emailValidation = (str) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(str).toLowerCase());
};

export const loginValidation = (str) => {
  const isString = typeof str === "string";
  const isValidLength = str.length > 3;
  return isString && isValidLength;
};

export const passwordValidation = (password) => {
  const isString = typeof password === "string";
  const isValidLength = password.length > 6;
  return isString && isValidLength;
};

export const codeValidation = (str) => {
  const isString = typeof str === "string";
  const isValidLength = str.length > 10;
  return isString && isValidLength;
};
