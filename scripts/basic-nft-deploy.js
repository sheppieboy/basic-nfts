const { ethers } = require('hardhat');

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());
  const basicNFT = await ethers.getContractFactory('BasicNFT');
  const nft = await basicNFT.deploy();
  console.log('Token address: ', nft.address);
};
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
