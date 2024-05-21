"use strict";
const login = (req, res) => {
  console.log("🚀 ~ login ~ res:", res)
  res.render("./pages/login");
};

module.exports = {
  login,
};
