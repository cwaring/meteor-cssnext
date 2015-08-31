# cssnext for Meteor

Preprocess CSS4 syntax using [cssnext](https://github.com/cssnext/cssnext)

Files with the `next.css` extension will be compiled with package.
You can also manually `@import` files named `xxx.import.next.css` as
these will be excluded from the build pipeline.

#Building a cssnext extension package

`kit:cssnext` exports a global `compile` buildstep function which enables you to build extension packages that depend on this package.

##Usage

```
/**
 * Transpile CSS4 syntax to CSS3 with cssnext
 * @param  {Object}  compileStep  Meteor compileStep object
 * @param  {Boolean} isLiterate
 * @param  {Object}  [cssnextExtend] cssnext compile options object
 */
CSSnext.compile(compileStep, isLiterate, cssnextExtend)
```

#### Install
```
meteor add kit:cssnext
```

---

### Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

[MIT license](http://opensource.org/licenses/MIT)