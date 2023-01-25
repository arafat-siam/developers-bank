import classes from "./Button.module.css";
const variant = {
  success: {
    background: "#43a047",
    color: "white",
  },

  danger: {
    background: "red",
    color: "white",
  },
};

const Button = ({ text, type, func }) => {
  return (
    <button className={classes.btn} style={{ ...variant[type] }} onClick={func}>
      {text}
    </button>
  );
};

export default Button;
