import { amountProp } from "../interfaces/amountProp";

class Expense implements amountProp {
  constructor(
    public description: string,
    public amount: number,
    public dueDate: string
  ) {}
}

export default Expense;
