// Open Closed Principle
// It means that the class should be open for extension but closed for modification

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Order {
  items = [];
  status = "pending";

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item_id) {
    this.items.pop();
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  }
}

// abstract class
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("PaymentProcessor is an abstract class");
    }
  }

  pay(cardNumber, order) {
    throw new Error("pay method must be implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(
      `Processing the credit card type payment with card number ${cardNumber}`
    );
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(
      `Processing the debit card type payment with card number ${cardNumber}`
    );
    order.status = "paid";
  }
}

class GPayPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(
      `Processing the GPay type payment with card number ${cardNumber}`
    );
    order.status = "paid";
  }
}

const tomato = new Item("tomato", 30, 2);
const onion = new Item("Onion", 20, 3);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);
console.log(order);
console.log("-".repeat(50));
// const paymentProcessor = new DebitPaymentProcessor();
const paymentProcessor = new GPayPaymentProcessor();
// const paymentProcessor = new CreditPaymentProcessor();
// paymentProcessor.payDebit("1234 5678 9012 3456", order);
paymentProcessor.pay("1234 5678 9012 3456", order);
// order.pay("credit", "1234 5678 9012 3456");
console.log("-".repeat(50));
console.log(order);
console.log("-".repeat(50));
