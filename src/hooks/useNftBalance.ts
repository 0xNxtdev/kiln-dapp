import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { readContract } from '@wagmi/core'
import { wagmiConfig } from '@/lib/wagmi'
import { erc1155DropAbi } from '@/lib/contracts/erc1155DropABI'
import type { TokenId } from '@/types/common'
import type { Address } from 'viem'

export function useNftBalance(
  contract: Address | undefined,
  tokenId: number | undefined,
) {
  const { address } = useAccount()

  const enabled =
    Boolean(address) &&
    Boolean(contract) &&
    typeof tokenId === 'number'

  const query = useQuery({
    queryKey: ['nftBalance', contract, tokenId, address],
    enabled,
    queryFn: async () => {
      const balance = await readContract(wagmiConfig, {
        address: contract!,
        abi: erc1155DropAbi,
        functionName: 'balanceOf',
        args: [address as Address, BigInt(tokenId as TokenId)],
      })

      return Number(balance)
    },
  })

  return {
    balance: query.data ?? 0,
    isLoading: query.isLoading,
    refetch: query.refetch,
  }
}