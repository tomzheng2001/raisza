/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export const output = 'export';
export const basePath = isProd ? '/raisza' : '';
export const assetPrefix = isProd ? '/raisza/' : '';
export const trailingSlash = true;
export const images = {
    unoptimized: true, // Disable Image Optimization
};
