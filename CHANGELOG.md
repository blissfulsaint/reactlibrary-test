# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.4] - 2025-01-22

### Updated

- Update peer dependencies to support `react@19` and `next@15`

## [1.0.3] - 2025-01-21

### Fixed

- Update package.json to include react, react-dom, next as peerDependencies rather than dependencies to avoid conflicts

## [1.0.2] - 2025-01-21

### Fixed

- Change types in package.json to point to dist/src/index.d.ts for declarations

## [1.0.1] - 2025-01-21

### Fixed

- Bug that caused components to not be declared properly in package build

## [1.0.0] - 2025-01-21

### Added

- Initial release with basic Storybook setup.
- Tailwind CSS integration.
- LayoutBand and Separator components added.
