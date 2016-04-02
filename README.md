# grunt-specificity-graph

> Generate CSS specificity graphs using grunt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-specificity-graph --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-specificity-graph');
```

## The "specificity_graph" task

### Overview
In your project's Gruntfile, add a section named `specificity_graph` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  specificity_graph: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.openInBrowser
Type: `Boolean`
Default value: `false`

An option to open the directory in browser. Currently it opens the directory
in Google Chrome. If Google Chrome is not present, it will open the folder.

A string value that is used to do something else with whatever else.

### Usage Example

```js
grunt.initConfig({
  specificity_graph: {
    task: {
      options: {},
      files: {
        src: ["*.css"],
        dest: "dest/"
    },
  }
  },
});
```

## Release History
0.1.0 Created grunt plugin for generating specificity_graph
