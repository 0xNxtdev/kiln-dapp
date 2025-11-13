import type { NFT } from '../types/nft.ts'

const API_BASE_URL = 'https://mint-api-production-7d50.up.railway.app'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed with ${res.status}`)
  }

  return await res.json() as Promise<T>
}

export async function fetchNfts(): Promise<NFT[]> {
  const res = await fetch(`${API_BASE_URL}/nfts`)
  return handleResponse<NFT[]>(res)
}

export async function fetchNft(id: string): Promise<NFT> {
  const res = await fetch(`${API_BASE_URL}/nfts/${id}`)
  return handleResponse<NFT>(res)
}