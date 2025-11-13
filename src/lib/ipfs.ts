export function resolveIpfsUrl(url: string): string {
  if (!url) return ''

  if (url.startsWith('ipfs://')) {
    // Remove the ipfs:// prefix
    const path = url.replace('ipfs://', '')
    return `https://ipfs.io/ipfs/${path}`
  }

  return url
}