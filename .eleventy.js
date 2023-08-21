module.exports = function (config) {
  // -- constants --
  const srcDir = "src"
  const dstDir = "public"

  return {
    dir: {
      input: srcDir,
      output: dstDir,
      layouts: '_layouts',
    }
  }

};
