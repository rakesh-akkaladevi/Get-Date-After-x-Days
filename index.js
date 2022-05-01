const addDays = require("date-fns/addDays");

const getDays = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = getDays;

// const addDays = require("date-fns/addDays");

// const getDateAfterXDays = (days) => {
//   const newDate = addDays(new Date(2020, 7, 22), days);
//   return `${newDate.getDate()}-${
//     newDate.getMonth() + 1
//   }-${newDate.getFullYear()}`;
// };

// module.exports = getDateAfterXDays;
