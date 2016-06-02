# maki-client-traverse
[![npm](https://img.shields.io/npm/v/maki-client-traverse.svg?&style=flat-square&maxAge=2592000)](https://www.npmjs.com/package/maki-client-traverse)

Use:

```js
var app = new Maki();
var plugin = require('maki-client-traverse');

app.use(plugin);
```

`traverse` should be available wherever `/js/bundle.js` is loaded.  By default,
this is in the global context for most Maki applications. which is an instance
of the `traverse` function from [traverse-async][ta].

[ta]: https://github.com/awnist/js-traverse-async
