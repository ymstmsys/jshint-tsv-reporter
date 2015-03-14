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
      reporter: require('jshint-tsv-reporter'),
      reporterOutput: 'jshint-report.tsv',
      locale: 'en'
    },
    target: ['file.js']
  }
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```

## Options (not available in CLI)

### locale

Type: String  
Default: undefined

Locale of TSV header line.
Support the following locale.

* en (English) (default)
* ja (Japanese)

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

