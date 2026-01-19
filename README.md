# @gui-chat-plugin/camera

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fcamera.svg)](https://www.npmjs.com/package/@gui-chat-plugin/camera)

A camera photo capture plugin for [MulmoChat](https://github.com/receptron/MulmoChat).

## Overview

This plugin allows users to take photos using their device's camera. It opens a camera preview modal where users can select their camera (if multiple are available) and capture a photo.

## Installation

```bash
yarn add @gui-chat-plugin/camera
```

## Usage

### Vue Implementation (for MulmoChat)

```typescript
// In src/tools/index.ts
import CameraPlugin from "@gui-chat-plugin/camera/vue";

const pluginList = [
  // ... other plugins
  CameraPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/camera/style.css";
```

### Core Only (Framework-agnostic)

```typescript
import { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "@gui-chat-plugin/camera";
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@gui-chat-plugin/camera` | Core (framework-agnostic) |
| `@gui-chat-plugin/camera/vue` | Vue implementation |
| `@gui-chat-plugin/camera/style.css` | Tailwind CSS styles |

## Test Prompts

1. "Take a photo"
2. "Open the camera"
3. "I want to take a selfie"
4. "Capture an image from my camera"

## Development

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build
yarn typecheck  # Type check
yarn lint       # Lint
```

## License

MIT
