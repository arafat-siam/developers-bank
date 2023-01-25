import { useEffect, useState } from "react";

function formatDate(time, hour = "") {
  return time < 10 ? `0${time}` : time;
}

const twelveHour = (hour) => {
  return hour > 12 ? hour % 12 : hour;
};
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <>
      <h1
        style={{
          fontSize: "15px",
          fontWeight: "700",
          color: "#000",
          position: "absolute",
          right: "5px",
          bottom: "30px",
        }}
      >
        {twelveHour(formatDate(time.getHours()))}:
        {formatDate(time.getMinutes())}:{formatDate(time.getSeconds())}
      </h1>
    </>
  );
};

export default Clock;
