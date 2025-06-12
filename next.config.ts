import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
  /* другие опции */
}

export default nextConfig
