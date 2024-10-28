import Income from "./modules/income.js";
import Expense from "./modules/expense.js";
import { TransactionsTemplate } from "./modules/transactionsTemplate.js";
// Grab items from the DOM
const form = document.querySelector("form");
const transactionType = document.querySelector("#transactionType");
const date = document.querySelector("#date");
const transactionDetails = document.querySelector("#transactionDetails");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new TransactionsTemplate(ul);
// Grab the input values
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    // let values;
    // values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (transactionType.value === "income") {
        doc = new Income(transactionDetails.value, amount.valueAsNumber, (date.valueAsDate = new Date()));
    }
    else {
        doc = new Expense(transactionDetails.value, amount.valueAsNumber, (date.valueAsDate = new Date()));
    }
    list.render(doc, transactionType.value);
    console.log(transactionType.value, date.valueAsDate, transactionDetails.value, amount.valueAsNumber);
});
/* let salaryFebruary = new Income("February salary", 3000, "2021-02-28");
let salaryMarch = new Income("March salary", 3000, "2021-03-31");
let rentFebruary = new Expense("February rent", 900, "2021-02-28");
let groceryFebruary = new Expense("February grocery", 200, "2021-02-28");
let rentMarch = new Expense("March rent", 900, "2021-03-31");
let groceryMarch = new Expense("March grocery", 130, "2021-03-31");

let incomes = 0;
incomes += salaryFebruary.amount;
incomes += salaryMarch.amount;

let expenses = 0;
expenses += rentFebruary.amount;
expenses += groceryFebruary.amount;
expenses += rentMarch.amount;
expenses += groceryMarch.amount;

console.log(`Net budget status - March: ${incomes - expenses}`); */
