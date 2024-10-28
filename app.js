import Income from "./modules/income.js";
import Expense from "./modules/expense.js";
import { TransactionsTemplate } from "./modules/transactionsTemplate.js";
// Grab items from the DOM
const form = document.querySelector("form");
const transactionType = document.querySelector("#transactionType");
const date = document.querySelector("#date");
const transactionDetails = document.querySelector("#transactionDetails");
const amount = document.querySelector("#amount");
// List template instance
const ul = document.querySelector("ul");
const list = new TransactionsTemplate(ul);
// Grab the input values
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let doc;
    if (transactionType.value === "income") {
        doc = new Income(transactionDetails.value, amount.valueAsNumber, (date.valueAsDate = new Date()));
    }
    else {
        doc = new Expense(transactionDetails.value, amount.valueAsNumber, (date.valueAsDate = new Date()));
    }
    list.render(doc, transactionType.value);
    //   console.log(
    //     transactionType.value,
    //     date.valueAsDate,
    //     transactionDetails.value,
    //     amount.valueAsNumber
    //   );
});
