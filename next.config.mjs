/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint:{
        ignoreDuringBuilds: true,
        ignoreDuringDevelopments: true,
    },

    images:{
        remotePatterns:[
         {
            protocol:'https',
            hostname:"cdn.sanity.io"
         }   
        ]
    }
};

export default nextConfig;
