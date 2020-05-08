export const emailValidation = (str) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(str).toLowerCase());
};

export const passwordValidation = (passStr) => {
  return passStr.length > 6;
};
