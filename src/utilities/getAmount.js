import { data } from "../database/Database";

function getAmount(obj = data.record) {
  return Object.values(obj).map((values) => values.amount);
}

export default getAmount;
