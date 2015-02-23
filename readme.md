# glob-test

A really tiny command-line utility to test what a glob will match from a certain directory.

### Install

```text
npm install -g glob-test
```

### Usage

From the directory in question:

```text
glob-test "*.coffee" 
```

Note that you can optionally exclude the quotes, but this may (depending on your environment) let the shell expand the glob. If you include the quotes, it will ensure that [node-glob](https://github.com/isaacs/node-glob) is used.