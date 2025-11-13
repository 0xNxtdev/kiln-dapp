import type { Connector } from 'wagmi'
import { useConnect } from 'wagmi'
import { useEffect, useState } from 'react'

export function WalletOptions({ onClose }: { onClose: () => void }) {
  const { connectors, connect } = useConnect()

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 animate-backdrop"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-xl p-6 w-[320px] animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold mb-4">Connect a wallet</h3>

        <div className="flex flex-col gap-3">
          {connectors.map((connector) => (
            <WalletOption
              key={connector.uid}
              connector={connector}
              onClick={() => connect({ connector })}
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 underline w-full text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function WalletOption({
                        connector,
                        onClick,
                      }: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const provider = await connector.getProvider()
        setReady(!!provider)
      } catch {
        setReady(false)
      }
    })()
  }, [connector])

  return (
    <button
      disabled={!ready}
      onClick={onClick}
      className={`btn-primary ${!ready ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {connector.name}
    </button>
  )
}