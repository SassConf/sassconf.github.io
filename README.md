# Contributing to SassConf.com

Howdy, thanks so much for helping make our site better. You don't need to fork the repo to make small corrections. Github snazzily handles forking from the web UI. If you'd like to make a substantial change, we ask that your fork the repo.

**All pull requests and changes should be against the `source` branch.**

Our site is powered by [Middleman](http://harpjs.com/), a simple Node based static webserver with built in preprocessing. You'll need NodeJS and NPM, which now comes with Node. Check out the [Node docs](https://nodejs.org/) for directions getting Node on your machine.

If you have Node already, you'll need to get HarpJS modules by running

```sudo npm install -g harp```

`cd` into the repo and run `npm install` to grab all the necessities. Followed by `gulp bower` to install our external style dependencies.

Finally, run `harp server` to start everything up.

If you have any questions or run into snags, tweet @sasconf.com or email us info[at]sassconf.conf.


## Todos

- [ ] Directions for forking the repo
- [ ] Directions for contributing directly from Github UI
- [ ] Browsersync
- [ ] Add engine dependencies to `package.json`
