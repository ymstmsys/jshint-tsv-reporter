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
			reporterOutput: 'jshint-report.tsv'
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```

## Example output

```
File	Code	Line	Column	Reason
reporter.js	W097	1	1	Use the function form of "use strict".
reporter.js	W117	3	1	'module' is not defined.
reporter.js	W117	7	5	'process' is not defined.
reporter.js	W117	12	7	'process' is not defined.
```
