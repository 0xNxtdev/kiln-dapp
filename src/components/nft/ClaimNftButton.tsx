import { memo, useCallback } from 'react'
import { useAccount } from 'wagmi'
import type { NFT } from '@/types/nft'
import { useMintNFT } from '@/hooks/useMintNft'
import type { Address } from 'viem'

type ClaimNftButtonProps = {
  nft: NFT
  onMintSuccess: () => void
}

export const ClaimNftButton = memo(function ClaimNftButton({
                                                             nft,
                                                             onMintSuccess,
                                                           }: ClaimNftButtonProps) {
  const { address } = useAccount()
  const { mint, isPending, isConfirming } = useMintNFT(onMintSuccess)

  const handleClick = useCallback(() => {
    if (!address) return

    void mint({
      contract: nft.tokenAddress as Address,
      tokenId: Number(nft.id),
      recipientAddress: address as Address,
    })
  }, [address, mint, nft])

  return (
    <button
      className="btn-primary"
      disabled={!address || isPending || isConfirming}
      onClick={handleClick}
    >
      Claim Now
    </button>
  )
})