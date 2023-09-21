export const generateRandomDigitNumber = () => {
  const min = 10000000;
  const max = 99999999;

  const randomDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomDigitNumber;
};
