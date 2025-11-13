import { useNfts } from '@/hooks/useNfts.ts'
import { resolveIpfsUrl } from '@/lib/ipfs.ts'
import { useNftViewer } from '../../context/NftViewerContext'

export default function CollectionGrid() {
  const { selectedId, setSelectedId } = useNftViewer()
  const { data: nfts, isLoading } = useNfts()

  if (isLoading || !nfts) {
    return (
      <>
        <h2 className="text-lg font-semibold mb-4">More from this collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full aspect-square bg-gray-200 animate-pulse rounded-xl" />
          ))}
        </div>
      </>
    )
  }

  const filtered = nfts.filter((n) => n.id !== selectedId)

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">More from this collection</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((nft) => {
          const img = resolveIpfsUrl(nft.metadata.image)

          return (
            <button
              key={nft.id}
              className="group text-left"
              onClick={() => setSelectedId(nft.id)}
            >
              <div className="w-full aspect-square overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={img}
                  alt={nft.metadata.name}
                  className="h-full w-full object-cover group-hover:opacity-90 transition"
                />
              </div>

              <h5 className="mt-2 font-medium text-sm">{nft.metadata.name}</h5>
              <p className="text-xs text-gray-500">0 ETH</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}