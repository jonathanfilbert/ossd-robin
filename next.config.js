/* eslint-disable no-undef */
module.exports = {
    trailingSlash: false,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/meet': { page: '/meet' },
          '/create': { page: '/create' },
        }
      },
}