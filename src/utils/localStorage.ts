export const tryParseDataFromLocalStorage = () => {
  const doubleCards = localStorage.getItem('doubleCards');

  if (doubleCards) return JSON.parse(doubleCards);
  return {};
};

export const stringifyDataToLocalStorage = (newData: {}) => {
  const prevData = tryParseDataFromLocalStorage();
  const changedData = { ...prevData, ...newData };

  localStorage.setItem('doubleCards', JSON.stringify(changedData));

  return;
};
