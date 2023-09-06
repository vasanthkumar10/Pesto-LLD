class Subcription {
  constructor(builder) {
    this.plan = builder.plan;
    this.duration = builder.duration;
    this.autoRenew = builder.autoRenew;
  }

  display() {
    console.log("Plan: ", this.plan);
    console.log("duration: ", this.duration, "months");
    console.log("autoRenew: ", this.autoRenew);
  }
}

class SubcriptionBuilder {
  constructor() {
    this.plan = "basic";
    this.duration = 3;
    this.autoRenew = false;
  }

  setPlan(plan) {
    this.plan = plan;
    return this;
  }

  setDuration(time) {
    this.duration = time;
    return this;
  }

  enableAutoRenew() {
    this.autoRenew = true;
    return this;
  }

  disableAutoRenew() {
    this.autoRenew = false;
    return this;
  }

  build() {
    return new Subcription(this);
  }
}

const basicPlan = new SubcriptionBuilder().build();
basicPlan.display();
console.log("-".repeat(50));
const premiumPlan = new SubcriptionBuilder()
  .setPlan("Premium")
  .setDuration(6)
  .build();
premiumPlan.display();
