import Layout from "../components/layout/Layout";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { id, data } from "../database/Database";
import getAmount from "../utilities/getAmount";
// ChartJS.defaults.color = "#fff";

const Dashboard = (props) => {
  let totalDeposits = getAmount().reduce((acc, curr) => {
    if (curr > 0) {
      acc += curr;
    }
    return acc;
  }, 0);
  let totalWithdraws = getAmount().reduce((acc, curr) => {
    if (curr < 0) {
      acc += curr;
    }
    return acc;
  }, 0);

  let totalLoans = getAmount(data.loanHistory).reduce(
    (acc, curr) => (acc += curr),
    0
  );

  return (
    <Layout>
      <div className="wrap flex justify-between">
        {/* Overview */}
        <div
          className="overView shadow-lg h-96 rounded-md p-3
        "
          style={{
            flexBasis: "60%",
          }}
        >
          <h2>Overview</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <Doughnut
              color="white"
              data={{
                labels: ["Deposits", "Withdraws", "Loan"],
                datasets: [
                  {
                    data: [
                      totalDeposits,
                      Math.abs(totalWithdraws),
                      parseInt(totalLoans) || 0,
                    ],
                    backgroundColor: [
                      "rgba(34,197,94,.5)",
                      "rgba(239,68,68,.5)",
                      "rgba(234,179,8,.5)",
                    ],
                    borderColor: [
                      "rgb(34 197 94)",
                      "rgb(239 68 68)",
                      "rgb(234 179 8)",
                    ],

                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>

        {/* News */}

        <div
          className="px-5 ml-5"
          style={{
            flexBasis: "40%",
          }}
        >
          <ul className="mt-4 flex flex-wrap gap-3 justify-start text-center">
            <li className="shadow-2xl px-3 py-2 rounded-md my-2 w-36 h-36 flex flex-col items-center justify-center ">
              <p className="text-5xl mb-2">
                {
                  Object.values(data.record).filter(
                    (value) => value.type === "deposit"
                  ).length
                }
              </p>
              <p>Deposit</p>
            </li>

            <li className="px-3 py-2 rounded-md my-2 w-36 h-36 flex items-center justify-center flex-col shadow-2xl">
              <p className="text-5xl mb-2">
                {" "}
                {
                  Object.values(data.record).filter(
                    (value) => value.type === "withdraw"
                  ).length
                }
              </p>
              <p>Withdraws</p>
            </li>
            <li className="px-3 py-2 rounded-md my-2 w-36 h-36 flex items-center justify-center flex-col shadow-2xl">
              <p className="text-5xl mb-2">
                {" "}
                {Object.keys(data.loanHistory).length}
              </p>{" "}
              <p>Loan</p>
            </li>
          </ul>
        </div>

        {/* Events */}
      </div>
    </Layout>
  );
};

export default Dashboard;
