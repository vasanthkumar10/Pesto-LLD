const express = require("express");
const app = express();

const { getUserData } = require("./userdata");
const { getProductData } = require("./productData");
const cache = require("./InMemoryCache");

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await getUserData(id);
  return res.json({
    msg: "Success",
    data: userData,
  });
});

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await getProductData(id);
  return res.json({
    msg: "Success",
    data: userData,
  });
});

app.get("/cache", (req, res) => {
  return res.json({
    msg: "success",
    data: cache,
  });
});

app.listen(3000, () => console.log("Server started...."));
