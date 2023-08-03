/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "pbs.twimg.com",
      "uploads-ssl.webflow.com",
      "cdn.pixabay.com",
      "github-readme-streak-stats.herokuapp.com",
    ],
 

  },
  output: 'export',
 
};

module.exports = nextConfig;
