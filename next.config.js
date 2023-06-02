const withPurgeCss = require('next-purgecss');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  withPurgeCss: {
    purgeCss: {
      content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
};

module.exports = nextConfig;
