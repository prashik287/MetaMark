# 🧬 MetaMark

### 🔗 Fake Product Identification with Barcode Based on Blockchain Technology

![MetaMark Banner](https://img.shields.io/badge/Build-NextGen%20dApp-blueviolet?style=flat-square) ![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.x-blue.svg) ![React](https://img.shields.io/badge/React-Frontend-61dafb.svg?style=flat&logo=react) ![IPFS](https://img.shields.io/badge/IPFS-Decentralized%20Storage-teal) ![License](https://img.shields.io/github/license/prashik287/MetaMark)

---

## 🌐 Overview

**MetaMark** is a futuristic decentralized application (dApp) that helps detect and prevent **counterfeit products** using **barcode verification powered by blockchain**.

By integrating **Solidity smart contracts**, **React frontend**, and **IPFS storage**, MetaMark ensures that every product’s authenticity can be verified securely and immutably on the Ethereum blockchain.

---

## 🚀 Features

- 🔐 **Blockchain Security** — Immutable smart contract written in Solidity to validate product authenticity.
- 📦 **Barcode Scanning** — Scan real-world product barcodes to check against blockchain data.
- 🌍 **IPFS Integration** — Secure, decentralized product metadata & ownership proof.
- ⚛️ **React Frontend** — Sleek, responsive, and futuristic UI built with React + Tailwind.
- 🧪 **Fake Product Detection** — Instantly identify counterfeit or tampered products.
- 🔗 **Ownership History** — Product traceability from manufacturer to customer.

---

## 🧱 Tech Stack

| Layer         | Technology                         |
|---------------|-------------------------------------|
| 🌐 Frontend    | React, Tailwind CSS, Vite           |
| 🧠 Smart Contract | Solidity, Hardhat                  |
| 📦 Storage     | IPFS (via Pinata or Web3.Storage)   |
| 🛠 Tools       | MetaMask, Ethers.js, QR/Barcode Scanner |

---

## 🔄 Workflow

1. 🏷️ Manufacturer uploads product details with a barcode.
2. 🔗 Data is hashed & stored on IPFS.
3. 📜 Smart contract registers the hash & barcode on Ethereum.
4. 📱 User scans product barcode via dApp.
5. ✅ dApp fetches data from blockchain + IPFS → verifies authenticity.

---

## 🧰 Installation

### 🔧 Prerequisites
- Node.js `>=18.x`
- MetaMask Wallet
- IPFS API key (e.g., Pinata)
- Hardhat (`npm install --save-dev hardhat`)
- Solidity Compiler

### 📦 Clone & Setup

```bash
git clone https://github.com/prashik287/MetaMark.git
cd MetaMark

# Install frontend dependencies
cd metamark
npm install

# Go back to root
cd ..

# Setup smart contracts
cd contracts
npm install
npx hardhat compile
