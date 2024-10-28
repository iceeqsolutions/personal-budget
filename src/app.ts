import Income from "./modules/income.js";
import Expense from "./modules/expense.js";
import { transactionProps } from "./interfaces/transactionProps.js";
import { TransactionsTemplate } from "./modules/transactionsTemplate.js";

// Grab items from the DOM
const form = document.querySelector("form");
const transactionType = document.querySelector(
  "#transactionType"
) as HTMLSelectElement;
const date = document.querySelector("#date") as HTMLInputElement;
const transactionDetails = document.querySelector(
  "#transactionDetails"
) as HTMLTextAreaElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const ul = document.querySelector("ul")!;
const list = new TransactionsTemplate(ul);

// Grab the input values
form?.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let doc: transactionProps;
  if (transactionType.value === "income") {
    doc = new Income(
      transactionDetails.value,
      amount.valueAsNumber,
      date.valueAsDate?.toDateString() || new Date().toDateString()
    );
  } else {
    doc = new Expense(
      transactionDetails.value,
      amount.valueAsNumber,
      date.valueAsDate?.toDateString() || new Date().toDateString()
    );
  }
  list.render(doc, transactionType.value);
  //   console.log(
  //     transactionType.value,
  //     date.valueAsDate,
  //     transactionDetails.value,
  //     amount.valueAsNumber
  //   );
});
