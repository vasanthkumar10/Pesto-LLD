const user = {
  name: "kartik",
  age: 20,
};

const handler = {
  get(target, property) {
    // console.log("target", target, property);
    console.log(`Accessing property ${property}`);
    return target[property];
  },

  set(target, property, value) {
    console.log(`Setting property ${property} to value ${value}`);
    target[property] = value;
  },
};

const karthik = new Proxy(user, handler);
// const karthik = user;

// console.log(karthik);
console.log("name", karthik.name);
karthik.name = "Kartik Dhunisinghani";
console.log(karthik.name);
