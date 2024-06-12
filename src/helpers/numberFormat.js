export const numberFormat = (num) => {
  return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};

export const numberDeFormat = (str) => {
  const result = str.split(',');
  console.log(result.join(''));
  return Number(result.join(''));
};
