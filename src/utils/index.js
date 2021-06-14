const roundNDecimal = (number, NDecimal) =>
  Number(Math.round(number + 'e' + NDecimal) + 'e-' + NDecimal);

export { roundNDecimal };
