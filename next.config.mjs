/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'foursouls.com'
            },
            {
                protocol:'https',
                hostname: 'media.tenor.com'
            }
        ]
    }
};

export default nextConfig;
