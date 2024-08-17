# GenLayer Full stack exam - Blockchain

## Env variables
We are using **Sepolia** testnet blockchain

```
INFURA_API_KEY=[Your Infura API key. Used by the provider to deploy the contract.]

SEPOLIA_PRIVATE_KEY=[Your deployer private key]

ETHERSCAN_API_KEY=[Etherscan API to verify the contract]
```

## GenToken 
A simple ERC-721 NFT token using library OpenZeppelin

Some simple tests included just to verify basic functionality.

To execute test run:

```
npx hardhat test
```

To deploy, (and verify) add the Env variables needed and execute

```
npx hardhat ignition deploy ./ignition/modules/GenToken.js --network sepolia --verify
```

Currently deployed token for live demo is:

### [0x62550B2b4fA9BB716CC65094DbdC7cb5DfAc1F8B](https://sepolia.etherscan.io/address/0x62550B2b4fA9BB716CC65094DbdC7cb5DfAc1F8B#code)

