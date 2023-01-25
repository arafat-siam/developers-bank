import formatDate from "./formateDate";

function dueDateMaker(date, dueDay) {
  let [day, month, year] = date.split("/");
  let finalDay;
  let finalMonth;
  let newDay = +day + +dueDay;
  console.log(newDay);
  if (+month % 2 === 1) {
    if (+newDay > 31) {
      finalDay = +newDay % 31;
      finalMonth = +month + 1;

      return `${formatDate(finalDay)}/${formatDate(finalMonth)}/${year}`;
    } else {
      return `${formatDate(newDay)}/${formatDate(newDay)}/${year}`;
    }
  } else if (month === 2) {
    if (newDay > 28) {
      finalDay = +newDay % 28;
      finalMonth = +month + 1;
      return `${formatDate(finalDay)}/${formatDate(finalMonth)}/${year}`;
    } else {
      return `${newDay}/${month}/${year}`;
    }
  } else {
    if (newDay > 30) {
      finalDay = +newDay % 30;
      finalMonth = +month + 1;
      return `${formatDate(finalDay)}/${formatDate(finalMonth)}/${year}`;
    } else {
      return `${formatDate(newDay)}/${formatDate(month)}/${year}`;
    }
  }
}

export default dueDateMaker;
