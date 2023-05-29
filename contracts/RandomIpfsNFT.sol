// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract RandomIpfsNFT is VRFConsumerBaseV2 {
    //when we mint a NFT, we will trigger a chainlink VRF call to get us a random number
    //using that number, we will get a rnadom NFt
    // Pug, Shiba Inu, St.Bernard
    //different rarity for each dog breed

    //users hjave to pay to mint an NFT
    //the owner of the contract cna withdraw the ETH

    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_gasLane;
    uint32 private immutable i_callbalcGasLimit;
    uint32 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUm_WORDS = 1;

    constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_subscriptionId = subscriptionId;
        i_gasLane = gasLane;
        i_callbalcGasLimit = callbackGasLimit;
    }

    function requestNFT() public {}

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {}

    function tokenURI(uint256) public {}
}
