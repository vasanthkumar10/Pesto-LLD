// getProductData

const axios = require("axios");
const cache = require("./InMemoryCache");

async function getProductData(id) {
  if (cache.has(`product-${id}`)) {
    console.log("Fetching the data from cache");
    return cache.get(`product-${id}`);
  }
  console.log("Fetching from server");
  const { data } = await axios.get(`https://reqres.in/api/products/${id}`);
  console.log("setting the cache");
  cache.set(`product-${id}`, data);
  console.log("after setting", cache);
  return data;
}

module.exports = {
  getProductData,
};
