// src/components/nft/MainContent.tsx
import NftPreview from './NftPreview'
import NftDetails from './NftDetails'
import CreatorCard from './CreatorCard'
import CollectionGrid from './CollectionGrid'
import { useNftViewer } from '@/context/NftViewerContext.tsx'

export default function MainContent() {
  const { selectedId } = useNftViewer()

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">

      {/* 2-column responsive layout */}
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Left column */}
        <div className="space-y-6">
          <NftPreview id={selectedId} />
          <CreatorCard />
        </div>

        {/* Right column */}
        <NftDetails id={selectedId} />
      </div>

      {/* More from this collection */}
      <div className="mt-16">
        <CollectionGrid />
      </div>

    </div>
  )
}