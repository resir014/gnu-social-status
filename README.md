# quitter-status

> Monitors the status of popular Quitter (GNU Social) instances.

This website checks the status of popular Quitter (GNU Social) instances. Currently, only a handful of instances are included (preferably those that support Qvitter), but [let me know](https://quitter.is/resi) if you want your instance added here and I'll consider it.

This website was made mostly when waiting for quitter.is to go back up after the 9th February downtime. I know. Blame [@hundur](https://quitter.is/hundur).

## How this works

Upon loading, this website will perform an HTTP request from your local connection, and returns a success message if the request completed successfully, and will be displayed on the page.

While this website is really useful for many people, the results on this page might not be accurate. Because HTTP requests are made locally, it could only be your internet that's acting up.

## Technologies

* [AngularJS](https://angularjs.org/) (v1.4.9)

## Running locally

You will need:
* [Node.js](https://nodejs.org/en/) (v4.0.0+)
* [Ruby](https://www.ruby-lang.org/en/) (v2.0.0+)
* [Bundler](http://bundler.io/)
  (included from within Rails (`gem install rails`) or `gem install bundler`)
* [Jekyll](http://jekyllrb.com/)
  (install from within Ruby: `gem install jekyll`)

Clone it. ( `git clone https://github.com/resir014/quitter-status.git` )

Then install all the bundled plugins.

```bash
$ npm install
$ bundle install
```

This website uses grunt to start up a local server and run JS/SCSS linting.

After the plugins are installed, we can now run a local server from within our computer.

```bash
# Start a local server.
$ grunt serve

# Run JS/SCSS linting.
$ grunt
```

## Contributing

1. [Fork it](https://github.com/resir014/quitter-status/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Create a new Pull Request

## License

[MIT.](https://github.com/resir014/quitter-status/blob/gh-pages/LICENSE)
