# Change log for: FreeSewing (global)


## Unreleased


## 2.10.5 (2020-11-14)

### i18n

#### Fixed

 - Added missing `cty.` translations to non-English language files


## 2.10.4 (2020-11-13)

### titan

#### Fixed

 - Issue with incorrectly named point


## 2.10.3 (2020-11-08)

### components

#### Changed

 - Draft component now supports snippets in the same way as the render method

### core

#### Changed

 - Renderprops now includes SVG with preRender hook applied


## 2.10.2 (2020-11-07)

### core

#### Fixed

 - Fixed bundled bezier-js version


## 2.10.1 (2020-11-07)

### components

#### Changed

 - Changes to workbench

### core

#### Changed

 - Switched to bezier-js v3

### css-theme

#### Changed

 - Removed unused CSS code


## 2.10.0 (2020-10-17)

### albert

#### Added

 - Albert is an apron pattern


## 2.9.0 (2020-10-02)

### components

#### Added

 - Added Teagan line drawing
 - Added Discord icon in Icon component

### core

#### Added

 - Parts not get a `name` property set that hold their (own) name/id
 - Added the `info` type to raised events
 - Added support for conditional loading of plugins

### create-freesewing-pattern

#### Fixed

 - No longer instantiate a pattern, just to get the config

### css-theme

#### Added

 - Changes to UI colors

### i18n

#### Added

 - Added translations for plugin-title
 - Added translations for teagan
 - Added some translations for the UI

#### Fixed

 - Replaced a few identical files with symlinks

### pattern-info

#### Added

 - Added teagan info

### plugin-dimension

#### Added

 - Added support for passing in the ID used to add paths to the part
 - Added the `rmd` macro that removes dimensions

### plugin-title

#### Added

 - Added support for cutting instructions. Closes [#500](https://github.com/freesewing/freesewing/issues/500)

### teagan

#### Added

 - Teagan is a T-shirt pattern


## 2.8.1 (2020-08-16)

### benjamin

#### Fixed

 - Fixed issue with (length of) band

### create-freesewing-pattern

#### Fixed

 - Fixed breaking change in execa upgrade in 2.8.0

### paco

#### Fixed

 - Added Titan as a peer dependency


## 2.8.0 (2020-08-10)

### benjamin

#### Fixed

 - Fix for incorrect length of the ribbon

### components

#### Added

 - Added Paco to LineDrawing component

#### Removed

 - Removed the `Footer` component

### core

#### Fixed

 - Fix an edge case in utils.pointOnCurve for perfect horizontal curves

### paco

#### Added

 - Initial release for Paco, a pattern for summer pants


## 2.7.2 (2020-07-29)

### core

#### Fixed

 - Fixed wrong return value in debug message from Path


## 2.7.1 (2020-07-24)

### aaron

#### Fixed

 - Set missing option `brianFitCollar` to `false`

### bruce

#### Fixed

 - Fixed a check for an undefined value in the store

### carlton

#### Fixed

 - Removed unused `hipsEase` code

### components

#### Added

 - Workbench now includes events debug output and enables debug by default

### core

#### Added

 - Added new debug functionality through the use of the `raise.debug`
 - Added a new `debug` setting
 - Shorthand now proxies objects to allow debug and raise

### css-theme

#### Added

 - Added themeing for events

### hugo

#### Fixed

 - Set missing option `brianFitCollar` to `false`
 - Adding missing control point to front neck opening

### simon

#### Fixed

 - Set missing option `brianFitCollar` to `false`
 - Don't assume the `chHips-notch` is available because it's not in Simone. Fixes [#833](https://github.com/freesewing/freesewing.org/issues/833)

### simone

#### Fixed

 - Set missing option `brianFitCollar` to `false`

### sven

#### Fixed

 - Avoided loading unset ribbingHeight from store

### utils

#### Added

 - Added backend calls for creating gists/issues on Github

### wahid

#### Added

 - Added the `square` hem style. Fixes [#672](https://github.com/freesewing/freesewing.org/issues/672)

#### Changed

 - Hem radius can no longer be zero. Use teh `square` hem style for that


## 2.7.0 (2020-07-12)

### aaron

#### Changed

 - Updated side seam shaping and tweaked options for better defaults
 - Better handling of `armholeDrop` option
 - Ported aaron to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names
 - Report armhole and neck opening length through raised events

#### Fixed

 - Fixed incorrect instruction for neck binding (the indicated length was only half)

### benjamin

#### Changed

 - Removed `Circumference` suffix from measurement names

### bent

#### Changed

 - Increased default for the `cuffEase` option
 - Decreased default for the `armholeDepth` option
 - Better range for the `shoulderSlopeReduction` measurement
 - Ported brian to the new (names for) other measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Set tip of undersleeve as anchor point for sampling
 - Removed `Circumference` suffix from measurement names

### breanna

#### Changed

 - Ported breanna to the new shoulderSlope measurement. See [#358](https://github.com/freesewing/freesewing/issues/358)
 - Ported breanna to the new (names for) other measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names
 - Removed deprecated `debug()` statements

### brian

#### Changed

 - Ported brian to new `shoulderSlope` degree measurement. See [#358](https://github.com/freesewing/freesewing/issues/358)
 - Ported brian to the new (names for) other measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Set HPS as anchor point for sampling in front and back
 - Removed `Circumference` suffix from measurement names
 - Removed deprecated `debug()` statements

### bruce

#### Changed

 - Ported bruce to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names
 - Removed deprecated `debug()` statements

#### Fixed

 - Sampling some options would not work in Bruce because the code shared across patterns would only run once. That's fixed now.

### carlita

#### Changed

 - Better range for the `shoulderSlopeReduction` measurement
 - Ported carlita to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Set a sample anchor point on the side part
 - Removed `Circumference` suffix from measurement names

### carlton

#### Changed

 - Better range for the `shoulderSlopeReduction` measurement
 - Ported carlton to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### cathrin

#### Changed

 - Ported carlita to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Set sample anchor points on all panels
 - Removed `Circumference` suffix from measurement names
 - Removed deprecated `debug()` statements

#### Fixed

 - [Fixed missing points issue when changing panels option](https://github.com/freesewing/freesewing.org/issues/619)
 - Fixed panels option being a list of numbers rather than strings

### components

#### Added

 - The `sampleConfigurator` component now supports the antwoman test (in addition to the antman test)
 - Changed `models` to `people` in `sampleConfigurator`
 - The `Legend` component is new, it is similar to the `Example` component but only for the pattern notation legend
 - Added support for custom sample styles
 - Added Titan linedrawing

#### Changed

 - Handle escaped quotes for React render. See [#437](https://github.com/freesewing/freesewing/issues/437)

#### Fixed

 - Fixed bug that broke millimeter sliders

### core

#### Added

 - Added support for injecting custom (path) styles when sampling. Closes [#380](https://github.com/freesewing/freesewing/issues/380)
 - Added support for custom sample styles
 - Added support for raising events via `raise.[type]()` method

#### Fixed

 - [Properly escape quotes in imperial units](https://github.com/freesewing/freesewing/issues/437)

### css-theme

#### Changed

 - Updated the width of the SVG paths of a draft to match plugin-theme

### diana

#### Changed

 - Made the `shoulderSlopeReduction` option static so it's not available in the UI
 - Ported diana to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### florence

#### Changed

 - Removed `Circumference` suffix from measurement names

### florent

#### Changed

 - Removed `Circumference` suffix from measurement names

### holmes

#### Changed

 - Removed `Circumference` suffix from measurement names

### huey

#### Changed

 - No longer use the `naturalWaist` measurement
 - Changed some option to better defaults
 - Ported huey to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Made the `shoulderSlopeReduction` option static so it's not available in the UI
 - Removed `Circumference` suffix from measurement names

#### Fixed

 - [Added seam allowance to the front closure](https://github.com/freesewing/freesewing/issues/420)

### hugo

#### Added

 - Added shaping of the side seam

#### Changed

 - Changed some option to better defaults
 - Ported hugo to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names
 - Removed deprecated `debug()` statements

### i18n

#### Changed

 - Added translations for Titan
 - Removed `Circumference` suffix from measurement names

### jaeger

#### Changed

 - Changed some option to better defaults
 - Set an anchor on side part for sampling
 - Ported jaeger to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### legend

#### Added

 - A pattern to document the markings on our patterns
 - Initial release

### models

#### Changed

 - Models now come with the new measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Ported models to the crotchDepth measurement. See [#425](https://github.com/freesewing/freesewing/issues/425)
 - Removed `Circumference` suffix from measurement names

### penelope

#### Changed

 - Ported penelope to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### plugin-bust

#### Changed

 - Removed `Circumference` suffix from measurement names

### plugin-buttons

#### Changed

 - Snippet names are changed, `snap-male` is now `snap-stud` and `snap-female` is now `snap-socket` Changing this to avoid needless use of gender related terminology.

#### Removed

 - Snippet `snap-male` and `snap-female` are no longer available. Use `snap-stud` and `snap-socket` instead

### plugin-measurements

#### Added

 - A FreeSewing plugin that adds measurements that can be calculated based on existing measurements

### plugin-mirror

#### Added

 - A FreeSewing plugin for mirroring points or paths
 - Initial release

### sandy

#### Changed

 - Ported sandy to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### shin

#### Changed

 - Ported shin to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### simon

#### Changed

 - Ported simon to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### simone

#### Changed

 - Ported simone to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### sven

#### Changed

 - Improved the shaping of the side seam
 - Changed some option to better defaults
 - Ported sven to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### tamiko

#### Changed

 - Switch from `shoulderSlope` option to `shoulderSlope` measurement
 - Ported tamiko to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### theo

#### Changed

 - Ported theo to the crotchDepth measurement. See [#425](https://github.com/freesewing/freesewing/issues/425)
 - Removed `Circumference` suffix from measurement names

### titan

#### Added

 - A FreeSewing block for pants/trousers
 - Initial release

### trayvon

#### Changed

 - Ported trayvon to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names

### tutorial

#### Changed

 - Removed `Circumference` suffix from measurement names

### utils

#### Added

 - Added new `isDegMeasurement` method. See [#358](https://github.com/freesewing/freesewing/issues/358)
 - `neckStimate` now supports all new measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)

#### Changed

 - Changed `neckstimate` to handle new `shoulderSlope` degree measurement. See [#358](https://github.com/freesewing/freesewing/issues/358)
 - Changed `neckstimate` to support all new measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Ported `neckstimate` to the crotchDepth measurement. See [#425](https://github.com/freesewing/freesewing/issues/425)
 - Removed `Circumference` suffix from measurement names
 - Added the `isDegMeasurement` method

### wahid

#### Changed

 - Ported wahid to the new (names for) measurements. See [#416](https://github.com/freesewing/freesewing/issues/416)
 - Removed `Circumference` suffix from measurement names
 - Removed `wrist` and `shoulderToWrist` as required measurements

### waralee

#### Changed

 - Ported waralee to the crotchDepth measurement. See [#425](https://github.com/freesewing/freesewing/issues/425)
 - Removed `Circumference` suffix from measurement names


## 2.6.0 (2020-05-01)

### brian

#### Fixed

 - The `saBase` path is no longer being rendered

### components

#### Added

 - [#368](https://github.com/freesewing/freesewing/issues/368): Allow pan and zoom in the Workbench component.
 - [#374](https://github.com/freesewing/freesewing/issues/374): Allow (extra) translations to be added to the workbench component
 - New shortcut buttons and sidebar collapse support for Workbench
 - Refactor to remove prop-types dependency
 - Reworked the withLanguage component to allow adding translations at run-time

### core

#### Changed

 - utils now includes `Bezier` which holds the bezier-js library so you don't need to re-import it
 - We no longer set the plugin configuration/data object to fall in `pattern.use()`

### create-freesewing-pattern

#### Added

 - [#365](https://github.com/freesewing/freesewing/issues/365): Check for node version and raise an error it is too old.

### css-theme

#### Added

 - New styled for updated Workbench component

### florence

#### Added

 - Florence is a face mask pattern

#### Deprecated

 - @freesewing/fu has been renamed to @freesewing/florence

### hugo

#### Fixed

 - Render fully-sized pattern parts when complete is falsy
 - Do not render pocket outline when complete is falsy
 - Do not render pocket facing hint when complete is falsy

### i18n

#### Changed

 - Changes to support the renaming of @freesewing/fu to @freesewing/florence

### plugin-export-dxf

#### Added

 - This plugin can export your pattern as DXF-ASTM
 - Initial release

### wahid

#### Fixed

 - Removed paths.test
 - Do not draw the pocket outline unless complete is truthy
 - Prevent rounded corners on pocket bag and lining to be drawn twice
 - Closed the front seam path
 - Draft the front lining/facing even when complete is falsy


## 2.5.0 (2020-04-05)

### css-theme

#### Changed

 - The sidebar no longer has a different background

#### Fixed

 - Fixed incorrect border value on active sidebar link

### diana

#### Added

 - Diana is a top with a draped neck

### i18n

#### Added

 - title, description, and options for Dianna


## 2.4.6 (2020-03-23)

### i18n

#### Fixed

 - Fixed an bug in the i18n package


## 2.4.5 (2020-03-19)

### florence

#### Changed

 - Improved shape based on community feedback

### utils

#### Changed

 - neckstimate() now returns values rounded to nearest mm

### wahid

#### Fixed

 - Check whether frontScyeDart option is zero prior to implementing it


## 2.4.4 (2020-03-15)

### core

#### Fixed

 - New Svg.escapeText() method to escape text at render time, rather than at draft time This fixes the difference in the inch symbol is displayed in the React component or rendered SVG

### huey

#### Fixed

 - The `sleevecapBackFactorY` and `sleevecapFrontFactorY` options had a minimum above the default

### plugin-dimension

#### Changed

 - Don't escape inch symbol in text. Instead let Svg.escapeText() handle it at render time

### simon

#### Fixed

 - The `sleevecapBackFactorY` and `sleevecapFrontFactorY` options had a minimum above the default

### simone

#### Fixed

 - The `sleevecapBackFactorY` and `sleevecapFrontFactorY` options had a minimum above the default

### sven

#### Fixed

 - The `sleevecapBackFactorY` and `sleevecapFrontFactorY` options had a minimum above the default


## 2.4.3 (2020-03-12)

### i18n

#### Added

 - Added more translations


## 2.4.2 (2020-03-08)

### components

#### Changed

 - Don't load docs in DraftConfigurator

### i18n

#### Added

 - Added more strings

### plugin-title

#### Changed

 - Added *for* to title output


## 2.4.1 (2020-03-04)

### components

#### Fixed

 - Fixed `updatePatternData` props issue in the Workbench component

### utils

#### Fixed

 - [#542](https://github.com/freesewing/freesewing.org/issues/542): Prevent neckstimate from throwing when getting an unexpected measurement 


## 2.4.0 (2020-02-29)

### florence

#### Added

 - Florence is a face mask pattern
 - Initial release


## 2.3.0 (2020-02-23)

### holmes

#### Added

 - Homes is a pattern for a Sherlock Holmes hat
 - Initial release

### plugin-gore

#### Added

 - A plugin to generate gores for semi-spheres or domes
 - Initial release


## 2.2.0 (2020-02-22)

### aaron

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### bent

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### breanna

#### Added

 - Breanna is a body block for womenswear

#### Changed

 - Removed deprecated `centerBackNeckToWaist` and `hpsToWaistBack` measurements

### brian

#### Changed

 - Reworked Brian to use the new shoulderslope measurement
 - Removed deprecated `centerBackNeckToWaist` measurement
 - The `neck` point has been renamed to `hps`

### carlita

#### Changed

 - Renamed `highPointShoulderToBust` measurement to `hpsToBust`
 - Removed deprecated `centerBackNeckToWaist` measurement

### carlton

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### components

#### Added

 - Added LineDrawing for Breanna

#### Changed

 - DraftConfigurator has been updated to reflect frontend naming changes
 - Updated Workbench component to pass data rather than gist to DraftConfigurator
 - Term `pattern` is now `design`
 - Term `recipe` is now `pattern`
 - Term `gist` is now `data`

### core

#### Added

 - Added the `Path.noop()` method
 - Added the `Path.insop()` methods

### create-freesewing-pattern

#### Fixed

 - [#257](https://github.com/freesewing/freesewing/issues/257): Explain that pattern names are bound by the constraints of NPM package names

### css-theme

#### Added

 - Added styling for table.data

#### Changed

 - Added new styles for the frontend changes in 2.2
 - Removed smaller fonts in ul.links

### florent

#### Fixed

 - Fixed an SA issue in brim top and removed SA from interfacing

### huey

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### hugo

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

#### Fixed

 - Made sure dimensions for hood center and waistband are always shown

### i18n

#### Added

 - Added translations for Breanna

#### Changed

 - Added/Updated strings for the 2.2 frontend changes
 - Changed `Joost De Cock` to `Joost` because spam filters don't like cock

#### Removed

 - Removed the files for homepage translation, and moved that content to markdown
 - Removed the files for editor translation, as it is no longer used

### jaeger

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### models

#### Changed

 - Extended the menswear size range to have 10 different sizes, just like womenswear

### mui-theme

#### Changed

 - Changed the light background to `#f8f9fa` rather than `#fff`
 - Changed the navbar to be light/dark based on the theme, rather than always dark

### penelope

#### Fixed

 - Fixed tags in pattern config file

### sandy

#### Fixed

 - Fixed tags in pattern config file

### simon

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### simone

#### Changed

 - Renamed `highPointShoulderToBust` measurement to `hpsToBust`
 - Removed deprecated `centerBackNeckToWaist` measurement

### sven

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### tamiko

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### theo

#### Fixed

 - Fixed issue with side piece

### trayvon

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### utils

#### Changed

 - Neckstimate now uses proportions only

### wahid

#### Changed

 - Removed deprecated `centerBackNeckToWaist` measurement

### waralee

#### Fixed

 - Fixed tags in pattern config file


## 2.1.9 (2020-01-18)

### core

#### Fixed

 - [#19](https://github.com/freesewing/freesewing/issues/19): Path offset issue is now fixed in upstream bezier-js@2.4.6

### simon

#### Fixed

 - [#253](https://github.com/freesewing/freesewing/issues/253): Fixed type in simon sleeve causing incorrect cuff issue


## 2.1.8 (2019-12-16)

### simon

#### Fixed

 - [#416](https://github.com/freesewing/freesewing.org/issues/416): Fixed bug in simon sleeve


## 2.1.7 (2019-12-15)

### carlton

#### Fixed

 - Added missing scalebox
 - Re-numbered tail as part 5


## 2.1.6 (2019-11-24)

### utils

#### Fixed

 - [#317](https://github.com/freesewing/freesewing.org/issues/317): Fixed bug where format was not passed to formatImperial


## 2.1.5 (2019-11-19)

### plugin-dimension

#### Fixed

 - Fixed issue where inch marks where breaking SVG because of unescaped double quotes


## 2.1.4 (2019-11-01)

### components

#### Deprecated

 - The Draft component has been renamed to Render. Draft still works, but will be removed in a future release.

#### Removed

 - The Ogol component has been removed as it wasn't used


## 2.1.3 (2019-10-18)

### i18n

#### Added

 - More translated strings

### utils

#### Changed

 - Adjusted slope of the shoulderToShoulder measurement in neckstimate data

#### Fixed

 - [#250](https://github.com/freesewing/freesewing.org/issues/250): Model page stays empty with pre 2.0 model data: Error: 'neckstimate() requires a valid measurement name as second parameter. (received underBust)'


## 2.1.2 (2019-10-14)

### i18n

#### Fixed

 - Fixed issue where symlinks were causing all languages to export English strings


## 2.1.1 (2019-10-13)

### components

#### Added

 - Added the fixme type Blockquote component

### css-theme

#### Fixed

 - Fixed padding issue on mobile

### gatsby-remark-jargon

#### Added

 - Added the gatsby-remark-jargon package, a gatbsy plugin wrapping remark-jargon
 - Initial release

### remark-jargon

#### Added

 - Added the remark-jargon package, a remark plugin for jargon terms
 - Initial release

### utils

#### Fixed

 - Fixed an issue with the formatMm method not adding units


## 2.1.0 (2019-10-06)

### components

#### Added

 - Added support for restoring recipe and pattern defaults in DraftConfigurator

#### Changed

 - Added Penelope and Waralee linedrawings
 - Changed animation of the Spinner component

#### Fixed

 - Fixed display of nested option in SampleConfigurator
 - Fixed conflicting key values in React components
 - Fixed issue with display of list options in Draftconfigurator

### core

#### Changed

 - The pattern super constructor now sets a `config` property that holds the pattern configuration. This means that unlike before, there is no need to instantiate a pattern to access its config. You can just import the pattern, and it's config property will contain the pattern config.

### css-theme

#### Changed

 - Made tweaks to the main/sidebar layout

#### Fixed

 - Reduced the sidebar height by 64px to take navbar into account
 - Fixed blockquote width on XS screens
 - Made sidebar wider

### i18n

#### Added

 - Added translations for Penelope, Waralee, and Simone

### penelope

#### Added

 - Added the Penelope Pencil Skirt pattern by @woutervdub
 - Initial release

### simon

#### Changed

 - [#123](https://github.com/freesewing/freesewing/issues/123): Added a box pleat option to Simon
 - Added the `backDarts` option to control the inclusion of back darts
 - Added the `backDartsShaping` option to control the amount of shaping by the back darts
 - Changed the defaults to slightly reduce the ease and adapt the sleevecap

#### Fixed

 - Fixed an issue where the store wasn't properly initialized causing hips and waist ease to be set incorrectly
 - Added a missing paperless dimension for the waist
 - Fixed an issue where the split yoke option was not taken into account correctly

### simone

#### Added

 - Added the Simone shirt pattern
 - Initial release

### utils

#### Added

 - Added backend methods for administration
 - Added the resendActivationEmail method to backend

#### Fixed

 - Fixed an issue where optionDefault was not handling list options correctly

### waralee

#### Added

 - Added the Waralee wrap Pants pattern by @woutervdub
 - Initial release


## 2.0.4 (2019-09-27)

### carlton

#### Fixed

 - [#108](https://github.com/freesewing/freesewing/issues/108): Fixed incorrect width of the Carlton tail

### components

#### Added

 - Advanced options and settings are now hidden by default in DraftConfigurator

#### Fixed

 - [#104](https://github.com/freesewing/freesewing/issues/104): Fixed incorrect embed setting on Workbench pattern export


## 2.0.3 (2019-09-15)

### bruce

#### Fixed

 - [#106](https://github.com/freesewing/freesewing/issues/106): Fix incorrect hem allowance

### components

#### Changed

 - Tweaked DraftConfigurator tags to match CSS rules after frontend upgrade to react-intl v3

### create-freesewing-pattern

#### Fixed

 - Updated example package.json to use latest tag rather than beta

### utils

#### Fixed

 - Fix measurementDiffers to pass breasts parameter to neckstimate


## 2.0.2 (2019-09-06)

### benjamin

#### Fixed

 - Added bandLength option to fit optiongroup (it was missing)

### components

#### Fixed

 - [#104](https://github.com/freesewing/freesewing.org/issues/104): Changed `onDragEnd` to `onChangeCommitted` in slider element (change in material-ui API when slider came out of beta)
 - Workbench now also lets you preload a `withBreasts` set of measurements
 - DraftConfigurator now properly styles pattern options 3 levels deep
 - [#105](https://github.com/freesewing/freesewing.org/issues/105): Moved state change in render loop to useEffect

### create-freesewing-pattern

#### Changed

 - Updated dependencies

#### Fixed

 - Added missing `file-saver` dependency

### css-theme

#### Fixed

 - Updated styles for DraftConfigurator component for pattern options 3 levels deep

### i18n

#### Added

 - [#90](https://github.com/freesewing/freesewing/issues/90): Added missing option translations for Benjamin, Florent, Sandy, Shin, and Theo

### jaeger

#### Fixed

 - [#76](https://github.com/freesewing/freesewing.org/issues/76): Fixed a typo in Jaeger that was causing the side vent length to be wrong

### simon

#### Fixed

 - [#100](https://github.com/freesewing/freesewing.org/issues/100): Updated simon with more sensible defaults for ease options
 - [#102](https://github.com/freesewing/freesewing.org/issues/102): Fixed 'Snippets not defined' error when drafting a seperate button placket
 - [#103](https://github.com/freesewing/freesewing.org/issues/103): Fixed 'hemSa not defined' when drafting paperless Simon without seam allowance

### utils

#### Fixed

 - Removed lingering debug statement in formatImperial


## 2.0.1 (2019-09-01)

### models

#### Added

 - Expanded the size ranges available.
 - Added the `withBreasts` models which were missing in earlier releases.

#### Changed

 - The models data is now based on the data from the `neckstimate` method in the utils package.

#### Fixed

 - [#86](https://github.com/freesewing/freesewing/issues/86): The `seatCircumference` measurement was missing, thus making it unavailable on the website

### theo

#### Fixed

 - [#78](https://github.com/freesewing/freesewing/issues/78): Removed inherited notches from fly shield and side piece.

### utils

#### Added

 - The `measurementDiffers` method is new.


## 2.0.0 (2019-08-25)

### aaron

#### Added

 - Initial release

### benjamin

#### Added

 - Initial release

### bent

#### Added

 - Initial release

### brian

#### Added

 - Initial release

### bruce

#### Added

 - Initial release

### carlita

#### Added

 - Initial release

### carlton

#### Added

 - Initial release

### cathrin

#### Added

 - Initial release

### components

#### Added

 - Initial release

### core

#### Added

 - Initial release

### create-freesewing-pattern

#### Added

 - Initial release

### css-theme

#### Added

 - Initial release

### examples

#### Added

 - Initial release

### florent

#### Added

 - Initial release

### huey

#### Added

 - Initial release

### hugo

#### Added

 - Initial release

### i18n

#### Added

 - Initial release

### jaeger

#### Added

 - Initial release

### models

#### Added

 - Initial release

### mui-theme

#### Added

 - Initial release

### pattern-info

#### Added

 - Initial release

### plugin-banner

#### Added

 - Initial release

### plugin-bundle

#### Added

 - Initial release

### plugin-bust

#### Added

 - Initial release

### plugin-buttons

#### Added

 - Initial release

### plugin-cutonfold

#### Added

 - Initial release

### plugin-dimension

#### Added

 - Initial release

### plugin-flip

#### Added

 - Initial release

### plugin-grainline

#### Added

 - Initial release

### plugin-i18n

#### Added

 - Initial release

### plugin-logo

#### Added

 - Initial release

### plugin-round

#### Added

 - Initial release

### plugin-scalebox

#### Added

 - Initial release

### plugin-sprinkle

#### Added

 - Initial release

### plugin-svgattr

#### Added

 - Initial release

### plugin-theme

#### Added

 - Initial release

### plugin-title

#### Added

 - Initial release

### plugin-validate

#### Added

 - Initial release

### prettier-config

#### Added

 - Initial release

### rendertest

#### Added

 - Initial release

### sandy

#### Added

 - Initial release

### shin

#### Added

 - Initial release

### simon

#### Added

 - Initial release

### sven

#### Added

 - Initial release

### tamiko

#### Added

 - Initial release

### theo

#### Added

 - Initial release

### trayvon

#### Added

 - Initial release

### tutorial

#### Added

 - Initial release

### utils

#### Added

 - Initial release

### wahid

#### Added

 - Initial release


