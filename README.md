# Kiln NFT Minting dApp (Base Sepolia)

A fully functional NFT minting dApp built with **React + TypeScript + Vite**, featuring:

- 🎨 NFT gallery + detail pages
- 🔗 Wallet connection (wagmi + viem)
- 🪙 ERC-1155 claim/minting (Base Sepolia)
- 💸 Wallet balance + NFT ownership
- 🔄 Transaction lifecycle UI (toasts, pending, confirming, success)
- ⚡ React Query caching + performance optimizations
- 🧼 Clean file structure + strong TypeScript usage

## 🚀 Tech Stack

- **React + TypeScript**
- **Vite** for fast development
- **TailwindCSS** for UI styling
- **Wagmi + Viem** for Web3 interactions
- **React Query** for caching on-chain reads
- **React Hot Toast** for transaction UX

## 📁 Project Structure

```
src/
  components/
    layout/
      Footer.tsx
      Header.tsx
      Layout.tsx

    nft/
      ClaimNftButton.tsx
      CollectionGrid.tsx
      CreatorCard.tsx
      NftDetails.tsx
      NftOverview.tsx
      NftPreview.tsx

    wallet/
      (wallet UI components if added later)

  context/
    NftViewerContext.tsx

  hooks/
    useMintNft.ts
    useNft.ts
    useNftBalance.ts
    useNfts.ts

  lib/
    contracts/
      (contract ABIs)
    api.ts
    ipfs.ts
    queryClient.ts
    wagmi.ts

  styles/
    index.css

  types/
    common.ts
    nft.ts

  App.tsx
  main.tsx
```

## ⚙️ Setup & Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Environment Setup

No .env secrets are required, but your app relies on:

- Base Sepolia RPC (via public RPC)
- Wagmi config inside `src/lib/wagmi.ts`

### 3. Run the dev server

```bash
npm run dev
```

## 🖼 Features

### ✓ NFT Gallery

Fetches all NFTs from:

```
GET https://mint-api-production-7d50.up.railway.app/nfts
```

### ✓ NFT Details

Shows metadata, traits, description & wallet ownership count.

### ✓ Wallet Connect

Minimal wallet integration using wagmi connectors.

### ✓ Minting (ERC-1155 Claim)

Fully implemented `claim()` function.

### ✓ Ownership Tracking

Reads ERC-1155 balance with `balanceOf(address, tokenId)`.

## 📦 Core Hooks

- `useNft`
- `useNfts`
- `useMintNft`
- `useNftBalance`

## 🔒 Contract

Thirdweb DropERC1155  
Network: Base Sepolia  
Functions used: claim(), balanceOf(), uri()

