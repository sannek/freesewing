# Change log for: @freesewing/core


## 2.10.2 (2020-11-07)

### Fixed

 - Fixed bundled bezier-js version

## 2.10.1 (2020-11-07)

### Changed

 - Switched to bezier-js v3

## 2.9.0 (2020-10-02)

### Added

 - Parts not get a `name` property set that hold their (own) name/id
 - Added the `info` type to raised events
 - Added support for conditional loading of plugins

## 2.8.0 (2020-08-10)

### Fixed

 - Fix an edge case in utils.pointOnCurve for perfect horizontal curves

## 2.7.2 (2020-07-29)

### Fixed

 - Fixed wrong return value in debug message from Path

## 2.7.1 (2020-07-24)

### Added

 - Added new debug functionality through the use of the `raise.debug`
 - Added a new `debug` setting
 - Shorthand now proxies objects to allow debug and raise

## 2.7.0 (2020-07-12)

### Added

 - Added support for injecting custom (path) styles when sampling. Closes [#380](https://github.com/freesewing/freesewing/issues/380)
 - Added support for custom sample styles
 - Added support for raising events via `raise.[type]()` method

### Fixed

 - [Properly escape quotes in imperial units](https://github.com/freesewing/freesewing/issues/437)

## 2.6.0 (2020-05-01)

### Changed

 - utils now includes `Bezier` which holds the bezier-js library so you don't need to re-import it
 - We no longer set the plugin configuration/data object to fall in `pattern.use()`

## 2.4.4 (2020-03-15)

### Fixed

 - New Svg.escapeText() method to escape text at render time, rather than at draft time This fixes the difference in the inch symbol is displayed in the React component or rendered SVG

## 2.2.0 (2020-02-22)

### Added

 - Added the `Path.noop()` method
 - Added the `Path.insop()` methods

## 2.1.9 (2020-01-18)

### Fixed

 - [#19](https://github.com/freesewing/freesewing/issues/19): Path offset issue is now fixed in upstream bezier-js@2.4.6

## 2.1.0 (2019-10-06)

### Changed

 - The pattern super constructor now sets a `config` property that holds the pattern configuration. This means that unlike before, there is no need to instantiate a pattern to access its config. You can just import the pattern, and it's config property will contain the pattern config.

## 2.0.0 (2019-08-25)

### Added

 - Initial release


This is the **initial release**, and the start of this change log.

> Prior to version 2, FreeSewing was not a JavaScript project.
> As such, that history is out of scope for this change log.

