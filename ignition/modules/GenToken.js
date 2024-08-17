const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("GenToken", (m) => {
  const genToken = m.contract("GenToken");

  return { genToken };
});
