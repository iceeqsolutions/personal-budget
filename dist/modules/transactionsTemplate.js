export class TransactionsTemplate {
    constructor(container) {
        this.container = container;
    }
    render(transaction, heading) {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = heading;
        p.textContent = `${transaction.description} - ${transaction.amount}€ - ${transaction.date}`;
        li.append(h3);
        li.append(p);
        this.container.prepend(li);
    }
}
