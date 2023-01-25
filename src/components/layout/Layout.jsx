import logo from "../../images/logo.jpg";
import classes from "./Layout.module.css";
// import FormGroup from "../form_group/FormGroup";
import Sidebar from "../sidebar/Sidebar";
import Menu from "../menu/Menu";
import Clock from "../clock/Clock";
import BoxedText from "../boxexText/BoxedText";
import CurrencyFillIcon from "remixicon-react/CurrencyFillIcon";
import AddCircleFillIcon from "remixicon-react/AddCircleFillIcon";
import SubtractFillIcon from "remixicon-react/SubtractFillIcon";
import { data } from "../../database/Database";
import getAmount from "../../utilities/getAmount";

const Layout = (props) => {
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

  return (
    <div className={classes.app + " relative left-0 top-0"}>
      {/* Header Start */}
      <Clock></Clock>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* <form
          className="login_elem"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <FormGroup
            label="Username"
            type="text"
            name="username"
            id="user"
            margin="0px 10px 0px 0px"
          />
          <FormGroup label="Password" type="password" name="pass" id="pass" />

          <button className="btn text-xl p-5">→</button>
        </form> */}
      </header>
      <main>
        <div
          className={classes.wrapper}
          style={{
            padding: "30px 50px",
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          <Sidebar name="myNav">
            <div className="logo_box w-24 mb-10">
              <img src={logo} alt="" />
            </div>
            <Menu value="Dashboard" link="/" />
            <Menu value="Transactions" link="transaction" />
            <Menu value="Loan" link="loan" />
            <Menu value="History" link="history" />
          </Sidebar>

          <div className={classes.display}>
            <div className={`${classes.balanceBox} mb-3`}>
              <BoxedText text={`${data.balance} ৳`} shortText={"Balance"}>
                <CurrencyFillIcon color="#000" />
              </BoxedText>

              <BoxedText text={`${totalDeposits} ৳`} shortText={"Deposits"}>
                <AddCircleFillIcon color="#000" />
              </BoxedText>

              <BoxedText
                text={`${Math.abs(totalWithdraws)} ৳`}
                shortText={"Withdraws"}
              >
                <SubtractFillIcon color="#000" />
              </BoxedText>
            </div>

            {/* Body contents goes here */}

            <div className={`${classes.body} px-7 py-3`}>{props.children}</div>
          </div>
        </div>
      </main>
      <footer
        className={`${classes.footer} absolute bottom-0 left-0 bg-slate-100 py-1`}
      >
        <div>
          <p className="text-center font-bold text-sm">
            All Rights are Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
