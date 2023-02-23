/** @type {import('next').NextConfig} */

const config = {
    basePath:
        process.env.NODE_ENV === "production"
            ? "/quickbi/frontend/quickbi-frontend-nextjs"
            : "",
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = config;
