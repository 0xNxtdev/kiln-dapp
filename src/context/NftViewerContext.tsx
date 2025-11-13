import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

type NftViewerProviderProps = {
  children: ReactNode
}

type NftViewerContextType = {
  selectedId: string
  setSelectedId: (id: string) => void
}

const NftViewerContext = createContext<NftViewerContextType | null>(null)

export function NftViewerProvider({ children }: NftViewerProviderProps) {
  // default NFT ID to start with
  const [selectedId, setSelectedId] = useState('1')

  return (
    <NftViewerContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </NftViewerContext.Provider>
  )
}

export function useNftViewer() {
  const ctx = useContext(NftViewerContext)
  if (!ctx) throw new Error('useNftViewer must be used within NftViewerProvider')
  return ctx
}