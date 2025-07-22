# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-21
### Added
- Initial release of `@artiqlize/stylize`
- Support for basic text styles: `bold`, `italic`, `underline`, `dim`, `strikethrough`
- Support for ANSI terminal colors (foreground and background)
- Proxy-based chaining API (e.g., `stylize.bold.red('Text')`)
- Function-style usage with multiple style sets and structure modes
- Structure modes: `char`, `word`, `line`, `full`
- `randomize` and `sequence` mode for applying styles
- RGB and HEX color support (e.g., `#FF0000`, `rgb(0,255,0)`, `bg#00FF00`)
- Style set validation and error handling
- Modular architecture: style parser, resolver, text splitter, proxy creator
- ESM-only module with support for Node.js >=18
