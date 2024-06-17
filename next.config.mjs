/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export const output = 'export';
export const basePath = isProd ? '/<your-repo-name>' : '';
export const assetPrefix = isProd ? '/<your-repo-name>/' : '';
export const trailingSlash = true;
export const images = {
    unoptimized: true, // Disable Image Optimization
};
