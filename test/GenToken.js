const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("GenLayerToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployGenLayer() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const GenToken = await ethers.getContractFactory("GenToken");
    const genToken = await GenToken.deploy();

    return { genToken, owner, otherAccount };
  }

  describe("Basic tests due to time for the exam!", function () {
    it("Should deploy a new NFT", async function () {
      const { genToken, owner, otherAccount } = await loadFixture(
        deployGenLayer
      );

      await genToken.safeMint(owner, "ipfs://");
      // we have 1 NFT fgor owner account
      expect(await genToken.balanceOf(owner)).to.equal(1);
      // with TokenID 0
      expect(await genToken.tokenOfOwnerByIndex(owner, 0)).to.equal(0);

      await genToken.safeMint(owner, "ipfs://");
      expect(await genToken.balanceOf(owner)).to.equal(2);
      expect(await genToken.tokenOfOwnerByIndex(owner, 1)).to.equal(1);

      await genToken.safeMint(otherAccount, "ipfs://");
      expect(await genToken.balanceOf(otherAccount)).to.equal(1);
      expect(await genToken.tokenOfOwnerByIndex(otherAccount, 0)).to.equal(2);
    });

    it("Should mint and transfer the token to a new address", async function () {
      const { genToken, owner, otherAccount } = await loadFixture(
        deployGenLayer
      );

      await genToken.safeMint(owner, "ipfs://");
      // we have 1 NFT fgor owner account
      expect(await genToken.balanceOf(owner)).to.equal(1);
      // with TokenID 0
      expect(await genToken.tokenOfOwnerByIndex(owner, 0)).to.equal(0);

      expect(await genToken.balanceOf(otherAccount)).to.equal(0);
      await genToken.transferFrom(owner, otherAccount, 0);
      expect(await genToken.balanceOf(owner)).to.equal(0);
      expect(await genToken.balanceOf(otherAccount)).to.equal(1);
    });
  });
});
