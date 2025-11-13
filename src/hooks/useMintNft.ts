import { useEffect } from 'react'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import toast from 'react-hot-toast'
import { erc1155DropAbi } from '@/lib/contracts/erc1155DropABI'
import type { Address } from 'viem'
import type { TokenId } from '@/types/common.ts'

export const NATIVE_TOKEN: `0x${string}` = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

type MintParams = {
  contract: Address
  tokenId: TokenId
  recipientAddress: Address
}

export function useMintNFT(onSuccess: () => void) {
  const {
    data: hash,
    writeContractAsync,
    isPending,
    error: writeError,
  } = useWriteContract()

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: confirmError,
  } = useWaitForTransactionReceipt({ hash })

  async function mint({ contract, tokenId, recipientAddress }: MintParams) {
    try {
      toast.loading('Waiting for wallet…', { id: 'mint' })

      const claimTokenId = BigInt(tokenId)
      const quantityToMint = 1n
      const currencyAddress = NATIVE_TOKEN
      const pricePerToken = 0n

      // Allowlist proof (empty since this is a public free mint)
      const allowlistProof = {
        proof: [],
        quantityLimitPerWallet: 0n,
        pricePerToken,
        currency: currencyAddress,
      }

      // Extra data payload (unused)
      const data = '0x'

      const tx = await writeContractAsync({
        address: contract,
        abi: erc1155DropAbi,
        chainId: baseSepolia.id,
        functionName: 'claim',
        value: 0n,
        args: [
          recipientAddress,
          claimTokenId,
          quantityToMint,
          currencyAddress,
          pricePerToken,
          allowlistProof,
          data,
        ],
      })

      toast.loading('Minting in progress…', { id: 'mint' })
      return tx
    } catch (err) {
      toast.error('Transaction rejected', { id: 'mint' })
      throw err
    }
  }

  useEffect(() => {
    if (!isConfirmed) return

    toast.success('Mint successful!', { id: 'mint' })

    // small delay gives block explorers time to index the TX.
    setTimeout(() => {
      onSuccess()
    }, 1200)
  }, [isConfirmed, onSuccess])

  useEffect(() => {
    if (confirmError) {
      toast.error('Mint failed.', { id: 'mint' })
    }
  }, [confirmError])

  return {
    mint,
    hash,
    isPending,
    isConfirming,
    isConfirmed,
    error: writeError || confirmError,
  }
}