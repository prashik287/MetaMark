import React, { useState } from 'react';
import { ethers } from 'ethers';
import MetamarkAbi from '../../../abi/Metamark.json';
import Web3 from 'web3';
function Registration() {
  const [account, setAccount] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    userType: '',
    account: '',
  });

  const contractaddress = "0x7F9cd5D9E0F97cDb953D61c39FAa9aDC6cc4fd4f";
  
  const dappUrl = 'your-dapp.vercel.app';

  const isMobile = () =>
    /android|iphone|ipad|ipod/i.test(navigator.userAgent);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const switchToGanache = async(e)=>{
  //   try {
  //     await window.ethereum.request
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (typeof window.ethereum !== 'undefined') {
      try {
        // Switch to Ganache network
        // const switched = await switchToGanache();
        // if (!switched) return; // Exit if the switch failed

        // 1. Connect to MetaMask
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner(); // ✅ get signer from wallet
        const walletAddress = await signer.getAddress(); // ✅ signer ka address
        const Contract = new ethers.Contract(contractaddress, MetamarkAbi, signer); // ✅ signer used here

        setAccount(walletAddress);
        const updatedData = { ...formData, account: walletAddress };
        setFormData(updatedData);

        console.log('Form Submitted:', JSON.stringify(updatedData, null, 2));

        // 2. Call smart contract function with signer
        const tx = await Contract.registerManufacturer(formData.name, formData.company);
        await tx.wait(); // ✅ wait for confirmation

        console.log("Manufacturer registered successfully!");
      } catch (err) {
        console.error('Smart contract interaction failed:', err);
      }
    } else if (isMobile()) {
      window.location.href = `https://metamask.app.link/dapp/${dappUrl}`;
    } else {
      alert('MetaMask not detected. Please install it.');
    }
  };

  return (
    <div className="mt-[35vh] md:mt-0 md:min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-8">
      <header className="w-full max-w-sm mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Register</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 space-y-5"
      >
        {/* Name */}
        <div className='text-black'>
          <label className="block mb-1 font-medium">Manufacturer Name:</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Company */}
        <div className='text-black'>
          <label className="block mb-1 font-medium">Company Name:</label>
          <input
            type="text"
            name="company"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* Radio Group */}
        <div className='text-black'>
          <label className="block mb-2 font-medium">Account Type:</label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="manufacturer"
                checked={formData.userType === 'manufacturer'}
                onChange={handleChange}
                required
              />
              <span>Manufacturer</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="userType"
                value="customer"
                checked={formData.userType === 'customer'}
                onChange={handleChange}
                required
              />
              <span>Customer</span>
            </label>
          </div>
        </div>

        {/* Wallet Address */}
        {formData.account && (
          <p className="text-sm text-green-700 text-center">
            Connected Wallet: {formData.account}
          </p>
        )}

        {/* Submit */}
        <div className="w-full text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
