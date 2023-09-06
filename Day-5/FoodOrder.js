// food order
class FoodOrder {
  constructor(menuItems, msg, deliveryAddress, deliveryTime, cutlery) {
    this.menuItems = menuItems;
    this.msg = msg;
    this.deliveryAddress = deliveryAddress;
    this.deliveryTime = deliveryTime;
    this.cutlery = cutlery;
  }

  display() {
    console.log(`Menu Items: `, this.menuItems);
    console.log(`msg: `, this.msg);
    console.log(`deliveryAddress: `, this.deliveryAddress);
    console.log(`deliveryTime: `, this.deliveryTime);
    console.log(`cutlery: `, this.cutlery);
  }
}

// order
const order = new FoodOrder(
  ["Briyani", "Butter chicken gravy"],
  "use tender chicken",
  "Chennai",
  "10pm",
  "I dont want cutlery"
);

const order2 = new FoodOrder(["pizza"], "", "delhi", "11pm", "");
console.log(order2);
