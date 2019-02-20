# Changelog
* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>

## 3.4.1
* Fixed a bug where `FloatingSelectInfinite` would crash, when there were no options in the `MenuList`.

## 3.4.0
* Ditch react-window in `FloatingSelectWindowed` component, use react-infinite instead and rename the component `FloatingSelectInfinite`

## 3.3.2
* Degrade to `react-select` 2.2 to restore nonce support

## 3.3.1
* Add nonce to portal version

## 3.3.0
* Added `FloatingSelectWindowed` component, which uses `react-window` library to display large amounts of data. Implementation is based on `react-windowed-select` [component](https://github.com/bvaughn/react-window)

## 3.2.4
* Expose styles.js, so it can be used in styling of other react-select based components

## 3.2.3
* Add nonce support. Nonce is currently derived from window.NONCE_ID

## 3.2.2
* Fix multiselect styles

## 3.2.1
* Fix focused menu option styles

## 3.2.0
* Add a reference to the react-select component

## 3.1.0
* Add FloatingSelectPortal & FloatingSelectPortalCreatable component for rendering select menu into document body

## 3.0.2
* Add missing dependency `styled-components`
* Update packages

## 3.0.1
* Added z-index for dropdown menu in order to avoid react-grid header column stack over

## 3.0.0
* Updated react-select v2.0.0 in order to support grouped options
* Added controlHeight prop
* Finetuned styles
* Updated repo https://github.com/OpusCapita/react-component-template
* Removed depencency to tether which became useless after updating react-select V2.

## 2.0.1
* Removed border rounding
* Enhanced focused style: same if dropdown is open or not

## 2.0.0
* Update to react 15.6.2

## 1.1.2
* Code formatting

## 1.1.1
* Fixed overflowed content

## 1.1.0
* Added focused style

## 1.0.0
* Extracted to own repository from oc-common-ui
