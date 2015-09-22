# cssnext for Meteor

Preprocess CSS4 syntax using [cssnext](https://github.com/cssnext/cssnext)

Files with the `next.css` extension will be compiled with package.
You can also manually `@import` files named `xxx.import.next.css` as
these will be excluded from the build pipeline.

# Building a cssnext extension package

`kit:cssnext` exports a global `CssnextCompiler` class which enables you to build extension packages that depend on this package.

## Example Usage

```
// Meteor 1.2.x

/**
 * Transpile CSS4 syntax to CSS3 with cssnext
 * @param  {Object}  [cssnextOptions] cssnext compile options object
 */
 Plugin.registerCompiler({
   filenames: ['xxx.next.css'],
   archMatching: 'web',
 }, function () { return new CssnextCompiler(cssnextOptions) } );
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