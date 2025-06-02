import { useState } from "react";
import { ethers } from "ethers";

export default function WalletConnect() {
  const [account, setAccount] = useState(null);
  const dappUrl = "192.168.143.231:3000"; // Change to your actual deployed domain or IP

  const isMobile = () =>
    /android|iphone|ipad|ipod/i.test(navigator.userAgent);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User rejected connection", err);
      }
    } else if (isMobile()) {
      // Redirect to MetaMask app
      window.location.href = `https://metamask.app.link/dapp/${dappUrl}`;
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  return (
    <div className="h-[150vh] md:h-auto md:min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-sm mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">MetaMark</h1>
        <p className="text-xl font-semibold text-gray-800">Login to DApp</p>
      </header>

      <div className="bg-white w-full max-w-sm p-6 rounded-2xl text-center">
        {!account ? (
          <button
            onClick={connectWallet}
            className="w-full bg-black md:bg-white text-black py-2  rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <p className="text-green-600 font-medium mb-2">Wallet Connected ✅</p>
            <div className="bg-gray-100 text-xs text-gray-800 break-all p-2 rounded-lg">
              {account}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
