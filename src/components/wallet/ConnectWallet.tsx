import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import { WalletAccount } from './WalletAccount'
import { WalletOptions } from './WalletOptions'

export function ConnectWallet() {
  const { isConnected } = useAccount()
  const [showOptions, setShowOptions] = useState<boolean>(false)

  // auto-close modal when wallet connects
  useEffect(() => {
    if (isConnected) setShowOptions(false)
  }, [isConnected])

  if (isConnected) return <WalletAccount />

  return (
    <>
      <button
        className="btn-primary max-w-[170px]"
        onClick={() => setShowOptions(true)}
      >
        Connect Wallet
      </button>

      {showOptions && (
        <WalletOptions onClose={() => setShowOptions(false)} />
      )}
    </>
  )
}