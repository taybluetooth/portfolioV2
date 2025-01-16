module.exports = (config) => {
  // Transforms
  const htmlMinTransform = require("./src/transforms/html-min-transform.js");

  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
