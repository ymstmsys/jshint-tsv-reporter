'use strict';

module.exports = {

  reporter : function(results, data, options) {
    // Header
    var header;
    if (options.hasOwnProperty('locale')) {
      try {
        header = require('./header/' + options.locale);
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          throw e;
        }
      }
    }
    if (!header) {
      header = require('./header/en');
    }

    process.stdout.write(header.join('\t') + '\n');

    // Result
    results.forEach(function(result) {
      var error = result.error;
      var value = [ result.file, error.code, error.line, error.character, error.reason ];
      process.stdout.write(value.join('\t') + '\n');
    });
  }

};
