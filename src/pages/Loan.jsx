import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { data } from "../database/Database";
import dueDateMaker from "../utilities/dueDateMaker";
import makeDate from "../utilities/makeDate";

let loanCount = 1000;
const date = new Date();

const Loan = () => {
  const [loanAmount, updateLoanAmount] = useState("");
  const [loanDays, updateDays] = useState("");
  const [giveLoanAmount, updateGiveLoan] = useState("");
  const [, setLoaned] = useState(false);
  const currBalance = data.balance;

  function loanAmountFunc(e) {
    if (Number(e.target.value)) {
      updateLoanAmount(+e.target.value);
    } else {
      updateLoanAmount("");
    }
  }
  function loanDayFunc(e) {
    if (Number(e.target.value)) {
      updateDays(+e.target.value);
    } else {
      updateDays("");
    }
  }

  function loanActive() {
    if (loanAmount && loanDays) {
      if (data.record.loan === undefined) {
        if (loanDays <= 15) {
          data.record["loan"] = {
            type: "loan",
            myDate: makeDate(),
            amount: `${loanAmount}*`,
            day: loanDays,
          };
          data.balance = currBalance + loanAmount;
          data.loanHistory[`${loanCount--}`] = {
            amount: loanAmount,
            date: makeDate(),
          };
          setLoaned(true);
        } else {
          alert("You can only take loan for 15 days");
        }
      } else {
        alert("You can't take another loan");
      }
    } else {
      alert("Fill correctly");
    }

    updateLoanAmount("");
    updateDays("");
  }

  function giveLoanRead(e) {
    if (Number(e.target.value)) {
      updateGiveLoan(+e.target.value);
    } else {
      updateGiveLoan("");
    }
  }

  const loanDueCheck = () => {
    const today = makeDate();
    if (data.record.loan) {
      let loanEndDate = dueDateMaker(
        data.record?.loan?.myDate,
        data.record?.loan?.day
      );

      if (today === loanEndDate) {
        let currentBalance = data.balance;
        data.balance = currentBalance - data.record.loan.amount;
        delete data.record.loan;
        updateLoanAmount("");
        updateDays("");
        updateGiveLoan("");
      }
    }
  };

  useEffect(() => {
    loanDueCheck();
  }, [date]);

  function giveLoan() {
    let loanedAmount = parseInt(data.record.loan.amount);

    if (giveLoanAmount > loanedAmount) {
      alert("Input loaned amount correctly");
    } else if (giveLoanAmount === loanedAmount) {
      let cuBal = data.balance;
      data.balance = cuBal - giveLoanAmount;
      delete data.record.loan;
      loanedAmount = 0;
      updateLoanAmount("");
      updateDays("");
      updateGiveLoan("");
    } else {
      let cuBal = data.balance;
      let newBal = cuBal - giveLoanAmount;
      data.balance = newBal;
      loanedAmount -= giveLoanAmount;
      data.record.loan.amount = loanedAmount;
      updateLoanAmount(loanedAmount);
      updateGiveLoan("");
      console.log(data);
    }
  }

  return (
    <Layout>
      <div className="">
        {data.record.loan === undefined && (
          <div className="loanForm">
            <h1 className="font-bold text-black text-xl mb-3 bg-green-500 rounded-md px-3 py-2 text-white">
              Apply For loan
            </h1>
            <div className="flex justify-between ">
              <div
                style={{
                  flexBasis: "70%",
                }}
              >
                <label className="block font-semibold" htmlFor="loanAmount">
                  Loan Amount
                </label>
                <input
                  type="text"
                  className="mb-3 w-4/5"
                  name="loanAmount"
                  id="loanAmount"
                  onChange={loanAmountFunc}
                  value={loanAmount}
                />
                <label className="block font-semibold" htmlFor="loanFor">
                  Loan For
                </label>
                <input
                  type="text"
                  className="w-4/5"
                  name="loanFor"
                  id="loanFor"
                  onChange={loanDayFunc}
                  value={loanDays}
                />
                <span className="ml-2">Days</span>
                <button
                  className="block bg-black px-5 py-2 rounded-md text-white my-3"
                  onClick={loanActive}
                >
                  Apply
                </button>
              </div>

              <div
                className="bg-blue-400 px-3 py-2 rounded-md shadow-lg text-white"
                style={{
                  flexBasis: "30%",
                }}
              >
                <h2 className="font-bold">Loan Conditions</h2>
                <ul className="list-disc list-inside">
                  <li>You can take loan for maximum 15 days</li>
                  <li>
                    After the due date loanAmount will be automatically cut from
                    your balance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {data.record.loan !== undefined ? (
          <div className="loanGive shadow-lg rounded-md px-4 py-3 w-96 bg-pink-400 text-white">
            <h1 className="font-bold">
              Loan Amount: {`${parseInt(data.record.loan.amount)} ৳`}
            </h1>
            <h1 className="font-bold">Date: {data.record.loan.myDate}</h1>
            <h1 className="font-bold mb-4">
              Due Date:{" "}
              {dueDateMaker(data.record.loan.myDate, data.record.loan.day)}
            </h1>
            <label className="block font-semibold" htmlFor="giveLoan">
              Give Loaned Amount
            </label>
            <input
              type="text"
              name="giveLoan"
              id="giveLoan"
              onChange={giveLoanRead}
              value={giveLoanAmount}
              className="text-black"
            />
            <button
              className="block bg-black px-5 py-2 rounded-md text-white my-3"
              onClick={giveLoan}
            >
              Give
            </button>
          </div>
        ) : undefined}
      </div>
      {localStorage.setItem("database", data)}
    </Layout>
  );
};

export default Loan;
