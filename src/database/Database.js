const users = {
  "009f6d10-9800-4ff5-8581-d29365afc4cd": {
    name: "Md. Arafat Hossain",
    balance: 5000,
    record: {
      100002: {
        myDate: "22/12/2022",
        amount: 8000,
        type: "deposit",
      },
      100001: {
        myDate: "31/12/2022",
        amount: -1000,
        type: "withdraw",
      },
    },
    loan: [],
    loanHistory: {},
    increment: 1,
  },
};

localStorage.setItem("database", JSON.stringify(users));

const id = "009f6d10-9800-4ff5-8581-d29365afc4cd";
const data = JSON.parse(localStorage.getItem("database"))[id];

export { id, data };
