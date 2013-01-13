# Concept Network

The browserified ([browserify](https://github.com/substack/node-browserify/)) version of [node-concept-network](https://github.com/parmentf/node-concept-network).

Concept Network is a weighted directed graph, in which activation values are propagated. Written in [Node.js](http://nodejs.org).

## Installation

### Get the files
Download the files: https://github.com/parmentf/browser-concept-network/archive/master.zip

Or clone the repository:
```bash
git clone https://github.com/parmentf/browser-concept-network.git
```

### Try it
Then, drag and drop file ``browser-concept-network/cn.html`` into your browser
(tested in Google Chrome 23, Firefox 18 and Chromium 20 ?).

### Put it in another application

Import `js/bundle-concept-network.min.js`, `js/jquery-1.8.3.min.js`,
`js/mustache.min.js`, and `js/concept-network.js` into your HTML page.

Take a look at ``concept-network.js``, and adapt it to your web application.

The important part is:
```javascript
var ConceptNetwork = require('concept-network');
cn = new ConceptNetwork();
```

## Demonstration

You can take a look at the example page, and {coming soon}


## Development

When a new version of [node-concept-network](https://github.com/parmentf/node-concept-network)
is available, and you want to update version 0.1.0 to 0.1.1, use these steps:
```bash
npm update concept-network
make version v=0.1.1
make index.html
git commit -a
make publish
```
For publishing the page on github, use:
```bash
git checkout gh-pages
git merge master
git push
```

## Release History
* 2013/01/13: 0.1.0: Initial release

## License
Copyright (c) 2013 François Parmentier <francois.parmentier@gmail.com>
Licensed under the MIT license.
