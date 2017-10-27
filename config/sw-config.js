module.exports = {
  cache: {
    cacheId: "electrode-starter",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-starter",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
