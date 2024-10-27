import { amountProp } from "../interfaces/amountProp";

class Income implements amountProp {
  constructor(
    public description: string,
    public amount: number,
    public date: string
  ) {}
}

export default Income;
