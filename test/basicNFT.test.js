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

  /**
   * Constructor tests
   */

  describe('Constructor', () => {
    it('Initializes the NFT contract correctly', async () => {
      const { basicNFT } = await loadFixture(deployNFTFixture);
      const name = await basicNFT.name();
      const symbol = await basicNFT.symbol();
      const tokenCounter = await basicNFT.getTokenCounter();
      assert.equal(name, 'Dogie');
      assert.equal(symbol, 'DOG');
      assert.equal(tokenCounter.toString(), '0');
    });
  });

  /**
   * mint function
   */

  describe('Mint NFT', () => {
    it('Updates the token count after mint ', async () => {
      const { basicNFT } = await loadFixture(deployNFTFixture);
      await basicNFT.mintNFT();
      const count = basicNFT.getTokenCounter();
      assert(count.toString(), '1');
    });
    it('The function tokenURI works as specificied', async () => {
      const { basicNFT } = await loadFixture(deployNFTFixture);
      const tokenURI = await basicNFT.tokenURI(0);
      assert.equal(tokenURI, await basicNFT.TOKEN_URI());
    });

    it('Show the correct balance and owner of an NFT', async () => {
      const { basicNFT, deployer } = await loadFixture(deployNFTFixture);
      //mint NFT
      await basicNFT.mintNFT();

      //owner should be the deployer
      const owner = await basicNFT.ownerOf('0'); //takes token Id which is 0
      assert.equal(deployer.address, owner);

      //balance should be 1
      const deployerBalance = await basicNFT.balanceOf(deployer.address);
      assert.equal(deployerBalance.toString(), '1');
    });
  });
});
