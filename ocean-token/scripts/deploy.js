const hre = require("hardhat");

async function main() {
  const SalToken = await hre.ethers.getContractFactory("SalToken");
  const salToken = await SalToken.deploy(100000000, 50);

  await salToken.deployed();

  console.log("Sal Token deployed: ", salToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
