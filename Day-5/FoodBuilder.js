class FoodOrderBuilder {
  constructor() {
    this.menuItems = [];
    this.msg = "";
    this.deliveryAddress = null;
    this.deliveryTime = null;
    this.cutlery = "";
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    return this;
  }

  addMsg(msg) {
    this.msg = msg;
    return this;
  }

  addAddress(address) {
    this.deliveryAddress = address;
    return this;
  }

  addTime(time) {
    this.deliveryTime = time;
    return this;
  }

  addCutlery(msg) {
    this.cutlery = msg;
    return this;
  }

  build() {
    return new FoodOrder(this);
  }
}

class FoodOrder {
  constructor(builder) {
    this.menuItems = builder.menuItems;
    this.msg = builder.msg;
    this.deliveryAddress = builder.deliveryAddress;
    this.deliveryTime = builder.deliveryTime;
    this.cutlery = builder.cutlery;
  }

  display() {
    console.log(`Menu Items: `, this.menuItems);
    console.log(`msg: `, this.msg);
    console.log(`deliveryAddress: `, this.deliveryAddress);
    console.log(`deliveryTime: `, this.deliveryTime);
    console.log(`cutlery: `, this.cutlery);
  }
}

const order = new FoodOrderBuilder()
  .addMenuItem("briyani")
  .addTime("10pm")
  .build();

console.log(order);
