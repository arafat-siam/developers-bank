import classes from "./Error.module.css";

const Error = ({ msg, func, d }) => {
  function cancelError() {
    func(d);
  }
  return (
    <div className={`${classes.errorModal} flex ga-3`}>
      <div className={`${classes.message} text-red-600 font`}>{msg}</div>
      <button
        className="bg-black px-3 py-2 rounded-md text-white"
        onClick={cancelError}
      >
        Ok
      </button>
    </div>
  );
};

export default Error;
