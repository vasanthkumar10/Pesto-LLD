// The Chain of Responsibility pattern is a behavioral design pattern
// that allows an object to pass a request along a chain of
// potential handlers until the request is handled or
// the end of the chain is reached. Each handler in the chain decides
// either to process the request or to pass it to the next handler
// in the chain.

// class Manager {
//   constructor() {
//     this.approvalLimit = 10000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of Rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve request of Rs.${request.amount}`
//       );
//     }
//   }
// }

// class Director {
//   constructor() {
//     this.approvalLimit = 50000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of Rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve request of Rs.${request.amount}`
//       );
//     }
//   }
// }

// class VicePresident {
//   constructor() {
//     this.approvalLimit = 500000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved purchase request of Rs.${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have permission to approve request of Rs.${request.amount}`
//       );
//     }
//   }
// }

// class PurchaseRequest {
//   constructor(amount) {
//     this.amount = amount;
//   }
// }

// const manager = new Manager();
// const director = new Director();
// const VP = new VicePresident();

// const request1 = new PurchaseRequest(4000);
// const request2 = new PurchaseRequest(40000);
// const request3 = new PurchaseRequest(400000);

// manager.processRequest(request1);
// manager.processRequest(request2);
// manager.processRequest(request3);

// ------------------------------------------------
// CHAIN OF RESPONSIBILITY
// ------------------------------------------------
// Handler

class Approver {
  constructor(approvalLimit) {
    this.approvalLimit = approvalLimit;
    this.successor = null;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  processRequest(request) {
    if (request.amount <= this.approvalLimit) {
      console.log(
        `${this.constructor.name} approved the purchase request of Rs.${request.amount}`
      );
    } else if (this.successor) {
      this.successor.processRequest(request);
    } else {
      console.log(
        `None of the managers can approve the purchase request of Rs.${request.amount}. Schedule a call with board members`
      );
    }
  }
}

// Concrete Handlers
class Manager extends Approver {
  constructor() {
    super(10000); // Manager can approve purchases up to Rs.10000
  }
}

class Director extends Approver {
  constructor() {
    super(50000); // Director can approve purchases up to Rs.50000
  }
}

class VicePresident extends Approver {
  constructor() {
    super(500000); // Vice President can approve purchases up to Rs.500000
  }
}

class PurchaseRequest {
  constructor(amount) {
    this.amount = amount;
  }
}

// Implementation

const manager = new Manager();
const director = new Director();
const vp = new VicePresident();

manager.setSuccessor(director);
director.setSuccessor(vp);

// console.log(manager);
// console.log(director);
// console.log(vp);

const request1 = new PurchaseRequest(4000);
const request2 = new PurchaseRequest(40000);
const request3 = new PurchaseRequest(400000);
const request4 = new PurchaseRequest(4000000);

// console.log(request1);
// console.log(request2);
// console.log(request3);

manager.processRequest(request1);
manager.processRequest(request2);
manager.processRequest(request3);
manager.processRequest(request4);
