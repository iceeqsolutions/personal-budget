import { transactionProps } from "../interfaces/transactionProps.js";

class Expense implements transactionProps {
  constructor(
    public description: string,
    public amount: number,
    public date: string
  ) // public date: Date
  {}
}

export default Expense;
