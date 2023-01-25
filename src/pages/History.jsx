import Layout from "../components/layout/Layout";
import { data } from "../database/Database";
import Activities from "../components/activities/Activities";
import classes from "./css/history.module.css";

const History = () => {
  return (
    <Layout>
      <div className={`${classes.historyBox} mb-3`}>
        <h1 className="font-bold">Transaction History</h1>
        <ul className="activities my-4 h-72 overflow-y-auto">
          {Object.values(data.record).length === 0 ? (
            <li className="bg-red-100 font-bold px-3 py-4 rounded-md">
              No activities found
            </li>
          ) : (
            Object.values(data.record).map(({ myDate, amount, type }) => {
              if (type !== "loan") {
                return (
                  <Activities
                    type={type}
                    amount={`${Math.abs(parseInt(amount))} ৳`}
                    date={myDate}
                  />
                );
              }
            })
          )}
        </ul>
      </div>

      <div className={classes.historyBox}>
        <h1 className="font-bold">Loan History</h1>
        <ul className="activities my-4 h-72 overflow-y-auto">
          {Object.values(data.loanHistory).length === 0 ? (
            <li className="bg-red-100 font-bold px-3 py-4 rounded-md">
              No loan found
            </li>
          ) : (
            Object.values(data.loanHistory).map(({ date, amount }) => {
              return (
                <Activities
                  type={"loan"}
                  amount={`${Math.abs(parseInt(amount))} ৳`}
                  date={date}
                />
              );
            })
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default History;
