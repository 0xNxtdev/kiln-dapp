import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache results for 30s before marking them stale.
      // Perfect for blockchain reads: balances don’t change every second,
      // and this prevents unnecessary RPC calls while navigating the UI
      staleTime: 1000 * 30,

      // Keep cached data in memory for 5 minutes after it becomes unused.
      // Helps the gallery/details feel instantly responsive when navigating back
      gcTime: 1000 * 60 * 5,

      // Avoid refetching when switching tabs or refocusing the window.
      // Blockchains are deterministic, and we manually refetch after minting,
      // so auto-refetching would only waste RPC calls.
      refetchOnWindowFocus: false,
    },
  },
})