# jshint-tsv-repoter

TSV (Tab Separated Values) format reporter for JSHint.

This suits to quality evaluation in Excel.

## Install

```sh
npm install --save-dev jshint-tsv-reporter
```

## Usage

### JSHint CLI

```sh
jshint --reporter node_modules/jshint-tsv-reporter/reporter.js file.js
```

### [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

```js
grunt.initConfig({
  jshint: {
    options: {
      jshintrc : '.jshintrc',
      reporter: require('jshint-tsv-reporter'),
      reporterOutput: 'jshint-report.txt'
    },
    target: ['file.js']
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```

### [gulp-jshint](https://github.com/spalger/gulp-jshint)

```js
gulp.task('jshint', function() {
  return gulp.src([ 'file.js' ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-tsv-reporter')
  );
});
```


## Options (not available in CLI)

### newline

Type: String  
Default: depend on operating system

NewLine character. For example: '\n', '\r', '\r\n'

### locale

Type: String  
Default: 'en'

Locale of TSV header line.
Support the following locale.

* en (English) (default)
* ja (Japanese)

### header

Type: Object  
Default: undefined

Set any header names.
This option is prior to locale option.

For example:
```
header: {
  file : 'File',
  code : 'Code',
  line : 'Line',
  character : 'Character',
  reason : 'Reason',
  evidence : 'Evidence'
}
```

### truncateEvidence

Type: Number  
Default: undefined

If set to positive number, evidence is truncated to the number of characters.  
If set undefined or null, whole evidence is output.  
If set to 0 or negative number, evidence is not output.


## Example output

```
File	Code	Line	Character	Reason
reporter.js	W097	1	1	Use the function form of "use strict".
reporter.js	W117	3	1	'module' is not defined.
reporter.js	W117	7	5	'process' is not defined.
reporter.js	W117	12	7	'process' is not defined.
```

