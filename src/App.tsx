import Layout from '@/components/layout/Layout.tsx'
import NftOverview from '@/components/nft/NftOverview.tsx'
import { NftViewerProvider } from './context/NftViewerContext'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <Layout>
      <NftViewerProvider>
        <NftOverview />
      </NftViewerProvider>
      <Toaster position="top-right" />
    </Layout>
  )
}

export default App
