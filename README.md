Summeralities
-------------

Summeralities is Harris Lapiroff's blog. Building it requires:

* Jekyll
* npm

Installing Dependencies
=======================

```bash
gem install jekyll         # might need `sudo`
npm install grunt-cli -g
npm install                # installs dependencies from `package.json`
```

Serving and Building the Blog
=============================

```bash
jekyll serve --watch
```

Installing Static Packages
==========================

```bash
cd static
bower install
```

Updating Static Packages
========================

```bash
cd static
bower update
```

Rebuilding Static Files
=======================

```bash
grunt # copies files from `_static` to `static`
```