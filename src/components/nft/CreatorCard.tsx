import { ArrowUpRight, CheckIcon, Instagram, Twitter } from 'lucide-react'

const KILN_URL = 'https://www.kiln.fi/'

export default function CreatorCard() {

  const openKiln = () => {
    window.open(KILN_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="w-full rounded-sm border border-gray-200 bg-white p-6">

      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src="/assets/kiln-logo.svg"
            alt="Kiln avatar"
            className="h-10 w-10 rounded-full border border-gray-300 bg-white object-cover"
          />
          <div
            className="absolute -right-1 bottom-0 h-4 w-4 shadow-sm rounded-full bg-black flex items-center justify-center">
            <CheckIcon className="h-2.5 w-2.5 text-white" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-sm">KILN</h3>
          </div>
          <p className="text-sm">@kiln</p>
        </div>
      </div>

      <p className="mt-4 text-sm">
        Hundreds of companies use Kiln to earn rewards on their digital assets, or to
        whitelabel earning functionality into their products.
      </p>

      <div className="mt-4 flex items-center gap-6">
        <button className="flex items-center gap-1 text-sm text-secondary hover:opacity-70 transition">
          <Twitter className="h-4 w-4" />
          @kiln
        </button>

        <button className="flex items-center gap-1 text-sm text-secondary hover:opacity-70 transition">
          <Instagram className="h-4 w-4" />
          @kiln
        </button>
      </div>

      <div className="mt-6 flex w-full gap-2">

        <button
          className="btn-primary"
          onClick={openKiln}
        >
          Website
        </button>

        <button
          onClick={openKiln}
          className="flex items-center justify-center bg-white px-3 border border-gray-300 rounded-sm hover:bg-gray-50 transition"
        >
          <ArrowUpRight className="h-4 w-4 text-black" />
        </button>
      </div>

    </div>
  )
}