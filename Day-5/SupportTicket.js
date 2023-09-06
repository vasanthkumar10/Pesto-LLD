const { generateId } = require("./utils");

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

  processTickets(processingMethod) {
    if (this.tickets.length === 0) {
      console.log("No tickets.. Superb");
      return;
    }

    if (processingMethod === "FIFO") {
      this.tickets.forEach((ticket) => this.process(ticket));
    } else if (processingMethod === "LIFO") {
      this.tickets.reverse().forEach((ticket) => this.process(ticket));
    } else if (processingMethod === "RANDOM") {
      const shuffledTickets = this.tickets.sort(() => Math.random() - 0.5);
      shuffledTickets.forEach((ticket) => this.process(ticket));
    }
  }
}

const app = new CustomerSupport();

app.create("vasanth", "My food is not delivered");
app.create("karthik", "My food is delayed by 10 mins");
app.create("Ben", "Zomato is one of the worst app");

app.processTickets("FIFO");
console.log("=".repeat(100));
app.processTickets("LIFO");
console.log("=".repeat(100));
app.processTickets("RANDOM");
console.log("=".repeat(100));
