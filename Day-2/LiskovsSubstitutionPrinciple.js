// Liskov's Substitution Principle
// It means that the subclass should be substitutable for the base class

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

  pay(order) {
    throw new Error("pay method must be implemented");
  }
}

class CreditPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(order) {
    console.log(
      `Processing the credit card type payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(order) {
    console.log(
      `Processing the debit card type payment with card number ${this.cardNumber}`
    );
    order.status = "paid";
  }
}

class GPayPaymentProcessor extends PaymentProcessor {
  constructor(mobileNumber) {
    super();
    this.mobileNumber = mobileNumber;
  }

  pay(order) {
    console.log(
      `Processing the GPay type payment with mobile number ${this.mobileNumber}`
    );
    order.status = "paid";
  }
}

class ApplePaymentProcessor extends PaymentProcessor {
  constructor(appleID) {
    super();
    this.appleID = appleID;
  }

  pay(order) {
    console.log(
      `Processing the apple type payment with apple id ${this.appleID}`
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
// const paymentProcessor = new DebitPaymentProcessor("1234 5678 9012 3456");
// const paymentProcessor = new GPayPaymentProcessor("1234567890");
// const paymentProcessor = new CreditPaymentProcessor("1234 5678 9012 3456");
const paymentProcessor = new ApplePaymentProcessor("1234 5678 9012 3456");
paymentProcessor.pay(order);
console.log("-".repeat(50));
console.log(order);
console.log("-".repeat(50));
