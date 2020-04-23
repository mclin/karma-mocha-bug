module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test.test.js',
    ],
    browsers: ['Chrome']
  });
};
