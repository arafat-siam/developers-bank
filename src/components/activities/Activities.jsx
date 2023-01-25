import classes from "./Activities.module.css";
const Activities = ({ date, type, amount }) => {
  let typeColor = undefined;
  let myType = undefined;
  if (type === "deposit") {
    typeColor = "bg-green-500";
    myType = "Deposit";
  } else if (type === "withdraw") {
    typeColor = "bg-red-500";
    myType = "Withdraw";
  } else if (type === "loan") {
    typeColor = "bg-yellow-500";
    myType = "Loan";
  }
  return (
    <li className={`${classes.list} bg-gray-50 px-3 py-2`}>
      <div className="left">
        <span className="bg-slate-100 text-black font-semibold px-1 rounded-sm mr-2">
          {date}
        </span>
        <span className={`${typeColor} px-2 rounded-md text-white font-bold`}>
          {myType}
        </span>
      </div>
      <div className="right">
        <span className="font-bold text-black">{amount}</span>
      </div>
    </li>
  );
};

export default Activities;
