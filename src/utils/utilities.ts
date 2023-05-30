export const cpfIsValid = (strCPF: string) => {
  let cpfWithoutSpecialCharacters = strCPF.replace(/[.-]/g, "");
  let sum: number, module: number;
  sum = 0;
  if (cpfWithoutSpecialCharacters === "00000000000") return false;
  if (cpfWithoutSpecialCharacters === "11111111111") return false;
  if (cpfWithoutSpecialCharacters === "22222222222") return false;
  if (cpfWithoutSpecialCharacters === "33333333333") return false;
  if (cpfWithoutSpecialCharacters === "44444444444") return false;
  if (cpfWithoutSpecialCharacters === "55555555555") return false;
  if (cpfWithoutSpecialCharacters === "66666666666") return false;
  if (cpfWithoutSpecialCharacters === "77777777777") return false;
  if (cpfWithoutSpecialCharacters === "88888888888") return false;
  if (cpfWithoutSpecialCharacters === "99999999999") return false;

  for (let i = 1; i <= 9; i++)
    sum =
      sum +
      parseInt(cpfWithoutSpecialCharacters.substring(i - 1, i)) * (11 - i);
  module = (sum * 10) % 11;

  if (module === 10 || module === 11) module = 0;
  if (module !== parseInt(cpfWithoutSpecialCharacters.substring(9, 10)))
    return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum =
      sum +
      parseInt(cpfWithoutSpecialCharacters.substring(i - 1, i)) * (12 - i);
  module = (sum * 10) % 11;

  if (module === 10 || module === 11) module = 0;
  if (module !== parseInt(cpfWithoutSpecialCharacters.substring(10, 11)))
    return false;

  return cpfWithoutSpecialCharacters;
};
