import formatDate from "./formateDate";

function makeDate() {
  const date = new Date();
  return `${formatDate(date.getDate())}/${formatDate(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
}

export default makeDate;
