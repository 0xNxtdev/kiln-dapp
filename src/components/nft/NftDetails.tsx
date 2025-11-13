import { useNft } from '@/hooks/useNft.ts'
import { ClaimNftButton } from '@/components/nft/ClaimNftButton.tsx'
import { useNftBalance } from '@/hooks/useNftBalance.ts'
import { useCallback } from 'react'
import type { Address } from 'viem'

export default function NftDetails({ id }: { id: string }) {
  const { data: nft, isLoading, error } = useNft(id)

  const { balance, isLoading: isLoadingBalance, refetch } = useNftBalance(
    nft?.tokenAddress as Address,
    Number(nft?.id),
  )

  // useCallback ensures the re-fetch function has a stable identity,
  // so the mint success callback always calls the correct version
  const handleRefetch = useCallback(() => {
    void refetch()
  }, [refetch])

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded" />
        <div className="h-4 w-64 bg-gray-200 animate-pulse rounded" />
      </div>
    )
  }

  if (error || !nft) {
    return (
      <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
        Failed to load NFT data. Please try again.
      </div>
    )
  }

  const traits = nft.metadata.attributes

  return (
    <div className="flex flex-col space-y-6">

      <div>
        <h1 className="text-2xl font-semibold">{nft.metadata.name}</h1>
        <p className={`text-sm text-[#6A7282] ${isLoadingBalance ? 'animate-pulse' : ''}`}>
          {isLoadingBalance ? 'Loading balance...' : ` You own ${balance}`}
        </p>
      </div>

      <p className="text-sm">{nft.metadata.description}</p>

      <div className="flex flex-wrap gap-3">
        {traits.map((attr) => (
          <div
            key={attr.trait_type}
            className="flex flex-col gap-1.5 rounded border border-gray-200 px-4 py-3 min-w-[180px]"
          >
          <span className="text-xs uppercase tracking-normal">
            {attr.trait_type}
          </span>

            <span className="text-xs text-gray-900">
            {attr.value}
          </span>
          </div>
        ))}
      </div>

      <div>
        <div className="p-0.5 mb-2 rounded-sm bg-black text-white text-xs flex justify-center w-[70px]">
          Free Mint
        </div>
        <div className="flex items-center gap-1.5">
          <img
            src="/assets/eth.png"
            alt="eth"
            className="h-3.5 w-auto"
          />
          <h3 className="text-xl font-semibold">0 ETH</h3>
        </div>
      </div>

      <ClaimNftButton nft={nft} onMintSuccess={handleRefetch} />
    </div>
  )
}