export const getDateOfYear = (dateValue: Date) => {
  const date = new Date(dateValue);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return year + '/' + month + '/' + day;
};
