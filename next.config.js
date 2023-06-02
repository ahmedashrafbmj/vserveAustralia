/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

};

module.exports = nextConfig;

// const withPurgeCss = require('next-purgecss');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// };

// module.exports = withPurgeCss(nextConfig, {
//   purgeCss: {
//     content: [
//       './pages/**/*.{js,jsx,ts,tsx}',
//       './components/**/*.{js,jsx,ts,tsx}',
//     ],
//     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//   },
// });
