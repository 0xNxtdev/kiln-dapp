import { ConnectWallet } from '@/components/wallet/ConnectWallet.tsx'

export default function Header() {
  return (
    <header className="w-full border-b border-[#E5E5E5] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <img
            src="/assets/kiln-logo.svg"
            alt="Kiln logo"
            className="h-7 w-auto"
          />
        </div>

        <ConnectWallet />
      </div>
    </header>
  )
}