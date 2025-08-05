# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-08-06
### Fixed
- **Fixed whitespace and tab styling bug**  
  Previously: spaces and tabs were styled individually.  
  Now: spaces and tabs are no longer styled independently.

### Changed
- **Updated `README.md` documentation**  
  - Improved structure and formatting for better readability.  
  - Adjusted image placement for cleaner layout.  
  - Added image documentation in markdown for usage examples, including:
    - `doc/basic-style1.png`
    - `doc/basic-style2.png`
    - `doc/chained-style.png`
    - `doc/multiple-styles.png`
    - `doc/random-style.png`
    - `doc/rgb.png`
    - `doc/hex.png`

## [1.0.0] - 2025-07-21
### Added
- Initial release of `@artiq/stylize`
- Support for basic text styles: `bold`, `italic`, `underline`, `dim`, `strikethrough`
- Support for ANSI terminal colors (foreground and background)
- Proxy-based chaining API (e.g., `stylize.bold.red('Text')`)
- Function-style usage with multiple style sets and structure modes
- Structure modes: `char`, `word`, `line`, `full`
- `randomize` and `sequence` mode for applying styles
- RGB and HEX color support (e.g., `#FF0000`, `rgb(0,255,0)`, `bg#00FF00`)
- Style set validation and error handling
- Modular architecture: style parser, resolver, text splitter, proxy creator
- ESM-only module with support for Node.js >=22
- 
