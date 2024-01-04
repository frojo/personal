module.exports = function (config) {
  config.addFilter("uppercaseFirstLetter", function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  })


  const srcDir = "src"
  const dstDir = "public"

  config.addPassthroughCopy(`${srcDir}/assets`)
  config.addPassthroughCopy(`${srcDir}/**/*.css`)
  config.addPassthroughCopy(`${srcDir}/**/*.js`)

  return {
    dir: {
      input: srcDir,
      output: dstDir,
      layouts: '_layouts',
    }
  }

};
