/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aceternity.com"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
            {
                protocol: "https",
                hostname: "**.amazonaws.com",
              },
              {
                protocol: "https",
                hostname: "d155wilooti46o.cloudfront.net"
              }
        ]
    }
};

export default nextConfig;
