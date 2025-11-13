export const erc1155DropAbi = [
  {
    name: 'claim',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: '_receiver', type: 'address' },
      { name: '_tokenId', type: 'uint256' },
      { name: '_quantity', type: 'uint256' },
      { name: '_currency', type: 'address' },
      { name: '_pricePerToken', type: 'uint256' },
      {
        name: '_allowlistProof',
        type: 'tuple',
        components: [
          { name: 'proof', type: 'bytes32[]' },
          { name: 'quantityLimitPerWallet', type: 'uint256' },
          { name: 'pricePerToken', type: 'uint256' },
          { name: 'currency', type: 'address' },
        ],
      },
      { name: '_data', type: 'bytes' },
    ],
    outputs: [],
  },
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
    ],
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  },
] as const