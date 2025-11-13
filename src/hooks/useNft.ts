import { useQuery } from '@tanstack/react-query';
import { fetchNft } from '../lib/api';
import type { NFT } from '../types/nft.ts';

export function useNft(id: string | undefined) {
  return useQuery<NFT>({
    queryKey: ['nft', id],
    queryFn: () => fetchNft(id!),
    enabled: !!id,
  });
}