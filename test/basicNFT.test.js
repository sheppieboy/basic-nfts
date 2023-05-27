const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('BasicNFT contract', function () {
  const deployNFTFixture = async () => {
    const nft = await ethers.getContractFactory('BasicNFT');
    const [deployer] = await ethers.getSigners();
    const basicNFT = await nft.deploy();

    //what to return from fixture
    return { basicNFT, deployer };
  };

  describe('Constructor', async () => {
    it('initializes the NFT contract correctly', async () => {
      const { basicNFT } = await loadFixture(deployNFTFixture);
      const name = await basicNFT.name();
      const symbol = await basicNFT.symbol();
      const tokenCounter = await basicNFT.tokenCounter();
      console.log(`The contract name is: ${name} and the symbol is ${symbol}`);
      assert.equal(name, 'Dogie');
      assert.equal(symbol, 'DOG');
      assert.equal(tokenCounter.toString(), '0');
    });
  });

  /**
   * Constructor tests
   */

  /**
   * Token counter tests
   */

  /** */
  //token counter
  //token uri
  //mintNFT
});
