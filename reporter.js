'use strict';

module.exports = {

  reporter : function(results, data, options) {
    // Options
    var locale = options.locale;
    var truncateEvidence = options.truncateEvidence;

    // Header
    var header;
    if (locale) {
      try {
        header = require('./header/' + locale);
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          throw e;
        }
      }
    }
    if (!header) {
      header = require('./header/en');
    }

    if (truncateEvidence === undefined || truncateEvidence === null || truncateEvidence > 0) {
      process.stdout.write(header.join('\t') + '\n');
    } else {
      process.stdout.write(header.slice(0, 5).join('\t') + '\n');
    }

    // Result
    results.forEach(function(result) {
      var error = result.error;
      var value = [ result.file, error.code, error.line, error.character, error.reason ];

      if (truncateEvidence === undefined || truncateEvidence === null) {
        value.push(error.evidence);
      } else if (truncateEvidence > 0) {
        value.push(error.evidence.substring(0, truncateEvidence));
      }

      process.stdout.write(value.join('\t') + '\n');
    });
  }

};
