

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov'
            },
            {
                protocol: 'https',
                hostname: 'www.youtube.com'
            },
            {
                protocol: 'https',
                hostname: 'earth.nullschool.net'
            },
        ]
    }
}

module.exports = nextConfig
