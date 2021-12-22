import React from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import contractABI from "../abi/Contract.json";

const CONTRACT_ADDRESS = "0xFAe308529C48b80FDF64C07CA59028895e827287";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

const MintButton: React.FC<{}> = () => {
  const [isMinting, setIsMinting] = React.useState(false);
  const checkIfWalletConnected = async () => {
    const provider = await web3Modal.connect();
    return new ethers.providers.Web3Provider(provider);
  };

  const mint = async () => {
    setIsMinting(true);
    try {
      const provider = await checkIfWalletConnected();
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI.abi as any,
        signer
      );
      const txn = await contract.makeAnEpicNFT("Shadab");
      await txn.wait();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsMinting(false);
    }
  };
  return (
    <button
      className="block mt-8 mx-auto rounded-full text-3xl uppercase bg-zinc-700 h-16 w-80 flex items-center justify-center z-10"
      onClick={mint}
      disabled={isMinting}
    >
      <div
        className={`animate-spin h-8 w-8 rounded-full border-t border-t-2 border-white mr-2 ${
          isMinting ? "visible" : "hidden"
        }`}
      ></div>
      Mint
    </button>
  );
};

export default MintButton;
