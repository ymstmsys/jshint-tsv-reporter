'use strict';

module.exports = {

  reporter : function(results) {
    var header = [ 'File', 'Code', 'Line', 'Column', 'Reason' ];
    process.stdout.write(header.join('\t') + '\n');

    results.forEach(function(result) {
      var error = result.error;
      var value = [ result.file, error.code, error.line, error.character, error.reason ];
      process.stdout.write(value.join('\t') + '\n');
    });
  }

};
