'use strict';

module.exports = {

  reporter : function(results, data, options) {
    // Options
    var newline = options.newline;
    var locale = options.locale;
    var headerOptions = options.header;
    var truncateEvidence = options.truncateEvidence;

    if (!newline) {
      newline = require('os').EOL;
    }

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
    if (headerOptions) {
      for ( var attr in headerOptions) {
        if (headerOptions.hasOwnProperty(attr)) {
          header[attr] = headerOptions[attr];
        }
      }
    }

    var value = [ header.file, header.code, header.line, header.character, header.reason ];
    if (truncateEvidence === undefined || truncateEvidence === null || truncateEvidence > 0) {
      value.push(header.evidence);
    }
    process.stdout.write(value.join('\t') + newline);

    // Result
    results.forEach(function(result) {
      var error = result.error;
      var value = [ result.file, error.code, error.line, error.character, error.reason ];

      var evidence;
      if (truncateEvidence === undefined || truncateEvidence === null) {
        evidence = error.evidence;
      } else if (truncateEvidence > 0) {
        evidence = error.evidence.substring(0, truncateEvidence);
      }
      if (evidence) {
        value.push(evidence.replace(/\t/g, ' ').trim());
      }

      process.stdout.write(value.join('\t') + newline);
    });
  }

};
