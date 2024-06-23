const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    output: 'export', // Export the app as static files
    trailingSlash: true, // Add trailing slashes to all paths
    images: {
        unoptimized: true, // Disable Image Optimization
    },
};
