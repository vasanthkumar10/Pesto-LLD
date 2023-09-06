// Strategy Pattern

const { generateId } = require("./utils");
const { fifo, lifo, random } = require("./Strategy");

class SupportTicket {
  constructor(customer, issue) {
    this.id = generateId();
    this.customer = customer;
    this.issue = issue;
  }
}

class CustomerSupport {
  constructor() {
    this.tickets = [];
  }

  create(customer, issue) {
    const ticket = new SupportTicket(customer, issue);
    this.tickets.push(ticket);
  }

  process(ticket) {
    console.log(
      `Processing ticket ${ticket.id} from ${ticket.customer} about issue ${ticket.issue}`
    );
  }

  processTickets(strategy) {
    const tickets = strategy.orderTickets(this.tickets);
    if (tickets.length === 0) {
      console.log("No tickets.... superb");
      return;
    }
    tickets.forEach((ticket) => this.process(ticket));
  }
}

const app = new CustomerSupport();

app.create("vasanth", "My food is not delivered");
app.create("karthik", "My food is delayed by 10 mins");
app.create("Ben", "Zomato is one of the worst app");

app.processTickets(fifo);
console.log("=".repeat(100));
app.processTickets(lifo);
console.log("=".repeat(100));
app.processTickets(random);
console.log("=".repeat(100));
