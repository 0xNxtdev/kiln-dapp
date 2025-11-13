import { useNft } from '@/hooks/useNft.ts'
import { resolveIpfsUrl } from '@/lib/ipfs.ts'

export default function NftPreview({ id }: { id: string }) {
  const { data: nft, isLoading } = useNft(id)

  if (isLoading || !nft) {
    return (
      <div className="w-full aspect-square bg-gray-200 rounded-xl animate-pulse" />
    )
  }

  const nftImg = resolveIpfsUrl(nft.metadata.image)

  return (
    <div className="w-full aspect-square overflow-hidden rounded-sm">
      <img
        src={nftImg}
        alt={nft.metadata.name}
        className="h-full w-full object-cover"
      />
    </div>
  )
}