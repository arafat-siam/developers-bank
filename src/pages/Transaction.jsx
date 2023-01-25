import Layout from "../components/layout/Layout";
import { useState } from "react";
import classes from "./css/Transaction.module.css";
import { data } from "../database/Database";
import Activities from "../components/activities/Activities";
import makeDate from "../utilities/makeDate";

let decrement = 10000;

function Transaction() {
  const [balance, updateBalance] = useState(data.balance);
  const [inputInitVal, updateInput] = useState(null);
  const [isToggled, setIsToggled] = useState(null);

  function inputValueRead(e) {
    if (Number(e.target.value)) {
      updateInput(+e.target.value);
    } else {
      updateInput("");
    }
  }

  function toggleFunc(e) {
    setIsToggled(e.target.id);
  }

  function makeDecision(e) {
    if (isToggled !== null) {
      if (inputInitVal) {
        if (isToggled === "deposit") {
          updateBalance(balance + inputInitVal);
          data.record[`${decrement--}`] = {
            id: decrement--,
            myDate: `${makeDate()}`,
            amount: +inputInitVal,
            type: "deposit",
          };
        } else {
          if (balance - inputInitVal >= 0) {
            updateBalance(balance - inputInitVal);
            data.record[`${decrement--}`] = {
              id: decrement--,
              myDate: `${makeDate()}`,
              amount: -inputInitVal,
              type: "withdraw",
            };
          } else {
            alert("Not Enough Money");
          }
        }
      }
    } else {
      alert("Please Select a method");
    }

    updateInput("");
  }

  data.balance = balance;

  return (
    <Layout>
      <div className="flex">
        <div
          style={{
            flexBasis: "55%",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Balance:{balance}
          </h3>

          <input
            type="text"
            name="inp"
            id="inp"
            onChange={inputValueRead}
            value={inputInitVal}
          />
          <input
            className={classes.radio}
            type="radio"
            name="x"
            id="deposit"
            onClick={toggleFunc}
          />
          <label
            className={`${classes.radio__label} ${classes.label_green} cursor-pointer`}
            htmlFor="deposit"
          >
            Deposit
          </label>
          <input
            className={classes.radio}
            type="radio"
            name="x"
            id="withdraw"
            onClick={toggleFunc}
          />
          <label
            className={`${classes.radio__label} ${classes.label_red}  cursor-pointer`}
            htmlFor="withdraw"
          >
            Withdraw
          </label>
          <button className={classes.updateBtn} onClick={makeDecision}>
            Update
          </button>
        </div>

        {/* Activities Tab */}

        <div
          className="shadow-lg py-3 px-5"
          style={{
            flexBasis: "45%",
          }}
        >
          <h3 className="font-bold">Activities</h3>

          <ul className="activities my-4 h-96 overflow-y-auto">
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
      </div>
      {localStorage.setItem("database", JSON.stringify(data))}
    </Layout>
  );
}

export default Transaction;
