const mimeTypes = require('./file-extension-to-mime-types.json');

function lookup(ext) {
  return mimeTypes['.' + ext];
}

module.exports = {
  lookup,
};
