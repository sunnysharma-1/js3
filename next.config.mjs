/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
           {
        protocol: "https",
        hostname: "www.globalwellpcba.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.viasion.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nai-group.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vectorbluehub.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "federalelec.com",
        pathname: "/**",
      },
    ],
    domains: ["images.pexels.com"],
  },
}

export default nextConfig
