const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x95F2c8e329A8C2425F496Ebe57C63DfC55f44620");

  await faucet.deployed();

  console.log("Facuet contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
