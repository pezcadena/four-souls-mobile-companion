/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname: 'foursouls.com'
            }
        ]
    }
};

export default nextConfig;
