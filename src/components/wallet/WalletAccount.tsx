import { useAccount, useDisconnect } from 'wagmi'
import { WalletIcon } from 'lucide-react'

export function WalletAccount() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  if (!address) return null

  const short = address.slice(0, 6) + '...' + address.slice(-4)

  return (
    <button
      onClick={() => disconnect()}
      className="btn-primary max-w-[170px] flex items-center gap-3"
    >
      <WalletIcon className="h-4 w-4" />
      {short}
    </button>
  )
}