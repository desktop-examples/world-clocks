# World Clocks

This application displays the current time in different cities around the world.

## Configuration

```yaml
---
kind: application
metadata:
  name: World Clocks
  description: Clocks from around the world
spec:
  url: https://desktop-examples.github.io/world-clocks/
  window:
    autoHideMenuBar: true
    backgroundColor: "#1d1d26"
    height: 110
    title: World Clocks
    titleBarStyle: hidden
    width: 380
```

## Quick Start

Install dependencies and start the application.

```bash
npm install
npm start
```

## Building from source

To install all dependencies and build run:

```bash
git clone https://github.com/desktop-examples/world-clocks.git
cd core
npm install
npm run build
```
