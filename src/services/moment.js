const moment = require("moment");

async function formatDate(date) {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  return formattedDate;
}

module.exports = { formatDate };
