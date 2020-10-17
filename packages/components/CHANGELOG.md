# Change log for: @freesewing/components


## 2.9.0 (2020-10-02)

### Added

 - Added Teagan line drawing
 - Added Discord icon in Icon component

## 2.8.0 (2020-08-10)

### Added

 - Added Paco to LineDrawing component

### Removed

 - Removed the `Footer` component

## 2.7.1 (2020-07-24)

### Added

 - Workbench now includes events debug output and enables debug by default

## 2.7.0 (2020-07-12)

### Added

 - The `sampleConfigurator` component now supports the antwoman test (in addition to the antman test)
 - Changed `models` to `people` in `sampleConfigurator`
 - The `Legend` component is new, it is similar to the `Example` component but only for the pattern notation legend
 - Added support for custom sample styles
 - Added Titan linedrawing

### Changed

 - Handle escaped quotes for React render. See [#437](https://github.com/freesewing/freesewing/issues/437)

### Fixed

 - Fixed bug that broke millimeter sliders

## 2.6.0 (2020-05-01)

### Added

 - [#368](https://github.com/freesewing/freesewing/issues/368): Allow pan and zoom in the Workbench component.
 - [#374](https://github.com/freesewing/freesewing/issues/374): Allow (extra) translations to be added to the workbench component
 - New shortcut buttons and sidebar collapse support for Workbench
 - Refactor to remove prop-types dependency
 - Reworked the withLanguage component to allow adding translations at run-time

## 2.4.2 (2020-03-08)

### Changed

 - Don't load docs in DraftConfigurator

## 2.4.1 (2020-03-04)

### Fixed

 - Fixed `updatePatternData` props issue in the Workbench component

## 2.2.0 (2020-02-22)

### Added

 - Added LineDrawing for Breanna

### Changed

 - DraftConfigurator has been updated to reflect frontend naming changes
 - Updated Workbench component to pass data rather than gist to DraftConfigurator
 - Term `pattern` is now `design`
 - Term `recipe` is now `pattern`
 - Term `gist` is now `data`

## 2.1.4 (2019-11-01)

### Deprecated

 - The Draft component has been renamed to Render. Draft still works, but will be removed in a future release.

### Removed

 - The Ogol component has been removed as it wasn't used

## 2.1.1 (2019-10-13)

### Added

 - Added the fixme type Blockquote component

## 2.1.0 (2019-10-06)

### Added

 - Added support for restoring recipe and pattern defaults in DraftConfigurator

### Changed

 - Added Penelope and Waralee linedrawings
 - Changed animation of the Spinner component

### Fixed

 - Fixed display of nested option in SampleConfigurator
 - Fixed conflicting key values in React components
 - Fixed issue with display of list options in Draftconfigurator

## 2.0.4 (2019-09-27)

### Added

 - Advanced options and settings are now hidden by default in DraftConfigurator

### Fixed

 - [#104](https://github.com/freesewing/freesewing/issues/104): Fixed incorrect embed setting on Workbench pattern export

## 2.0.3 (2019-09-15)

### Changed

 - Tweaked DraftConfigurator tags to match CSS rules after frontend upgrade to react-intl v3

## 2.0.2 (2019-09-06)

### Fixed

 - [#104](https://github.com/freesewing/freesewing.org/issues/104): Changed `onDragEnd` to `onChangeCommitted` in slider element (change in material-ui API when slider came out of beta)
 - Workbench now also lets you preload a `withBreasts` set of measurements
 - DraftConfigurator now properly styles pattern options 3 levels deep
 - [#105](https://github.com/freesewing/freesewing.org/issues/105): Moved state change in render loop to useEffect

## 2.0.0 (2019-08-25)

### Added

 - Initial release


This is the **initial release**, and the start of this change log.

> Prior to version 2, FreeSewing was not a JavaScript project.
> As such, that history is out of scope for this change log.

