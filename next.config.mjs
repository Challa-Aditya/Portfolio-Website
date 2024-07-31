/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Disable the canvas module alias
      config.resolve.alias.canvas = false;
  
      return config;
    },
  };
  
  export default nextConfig;