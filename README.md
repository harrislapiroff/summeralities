Summeralities
-------------

Summeralities is Harris Lapiroff's blog. Building it requires:

* Jekyll
* npm

Installing Dependencies
=======================

```bash
gem install jekyll          # might need `sudo`
npm install grunt-cli -g
npm install                 # installs dependencies from `package.json`
```

Serving and Building the Blog
=============================

```bash
jekyll serve --watch --config _dev_config.yml
```

Installing Static Packages
==========================

```bash
bower install    # required the first time you clone the repo, run `grunt` after
```

Updating Static Packages
========================

```bash
bower update    # run `grunt` after, then add files, and make a new commit
```

Rebuilding Static Files
=======================

```bash
grunt    # copy/process files from `_static` to `static`
```

Special Directories
===================

The following directories and files are special (n.b., not all of them appear in the repository):

* `_site/` is managed by the `jekyll` command. Do not modify it manually. It is ignored by Git.
* `node_modules/` is managed by the `npm` command. Do not modify it manually. It is ignored by Git.
* `_static/bower/` is managed by the `bower` command. Do not modify it manually. It is ignored by Git.
* `static/` is managed by the `grunt` command. Do not modify it manually. Updates must be committed to the Git repository after `grunt` is run.
* `favicon.ico` is generated automatically by [Opacity][] when saving `_favicon/favicon.opacity`.

[Opacity]: http://likethought.com/opacity/