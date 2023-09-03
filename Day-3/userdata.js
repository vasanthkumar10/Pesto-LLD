// getUserData

const axios = require("axios");
const cache = require("./InMemoryCache");

async function getUserData(id) {
  if (cache.has(`user-${id}`)) {
    console.log("Fetching the data from cache");
    return cache.get(`user-${id}`);
  }
  console.log("Fetching from server");
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`);
  console.log("setting the cache");
  cache.set(`user-${id}`, data);
  console.log("after setting", cache);
  return data;
}

module.exports = {
  getUserData,
};
