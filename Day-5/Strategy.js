class TicketProcessingStrategy {
  orderTickets(tickets) {
    throw new Error("Base class. Not implemented");
  }
}

class FIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets;
  }
}

class LIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.reverse();
  }
}

class RandomStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.sort(() => Math.random() - 0.5);
  }
}

const fifo = new FIFOStrategy();
const lifo = new LIFOStrategy();
const random = new RandomStrategy();

module.exports = {
  fifo,
  lifo,
  random,
};
