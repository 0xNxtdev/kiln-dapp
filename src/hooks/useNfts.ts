import { useQuery } from '@tanstack/react-query'
import { fetchNfts } from '../lib/api'
import type { NFT } from '../types/nft.ts'

export function useNfts() {
  return useQuery<NFT[]>({
    queryKey: ['nfts'],
    queryFn: fetchNfts,
    staleTime: 1000 * 60, // 1 min cache
  })
}