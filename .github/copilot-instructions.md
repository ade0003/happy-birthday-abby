# Copilot Instructions for Birthday Chaos Project

## Project Overview

This is a single-page birthday celebration webpage featuring a chaotic animated image collage with synchronized audio playback. The app creates a festive, overwhelming visual experience with rainbow gradients, floating images, and alternating music tracks.

## Architecture

- **HTML (`index.html`)**: Basic structure with container divs for collage and three audio controls
- **JavaScript (`script.js`)**: Handles dynamic image collage generation, audio alternation, and fullscreen activation
- **CSS (`styles.css`)**: Rainbow gradient backgrounds, text animations, and chaotic image movement patterns

## Key Patterns

- **Image Collage**: Uses 6 base images (mix of JPG and PNG) duplicated 64 times with random positioning, sizing (120-340px), rotation, and z-index layering
- **Animation System**: 6 animation classes (`animate-float`, `animate-spin`, `animate-bounce`, `animate-pulse`, `animate-wiggle`, `animate-wander`) applied randomly to images
- **Audio Synchronization**: All three tracks play simultaneously and loop independently forever
- **Staggered Appearance**: Images fade in with random delays (up to 1.2s) plus index-based staggering
- **Responsive Chaos**: Window resize re-randomizes all image positions

## Development Workflow

- **Running**: Open `index.html` directly in a browser (no build process required)
- **Adding Images**: Place JPG files in root directory, update `baseImages` array in `script.js`
- **Adding Audio**: Add MP3 files, update HTML audio elements and alternation logic in `script.js`
- **Fullscreen**: Triggered automatically on "Start Party" click for immersive experience

## Code Conventions

- **Image Naming**: Mixed JPG and PNG files with descriptive names for easy array management
- **Animation Timing**: Use `Math.random()` for chaos; fixed durations for consistency (e.g., 1.2s float, 2s spin)
- **Z-Index Management**: Base images z-index 2-51, hover boosts to 1000, overlay at 9999
- **Autoplay Handling**: Attempt autoplay on load, fallback to overlay button with fullscreen request

## File References

- `script.js` lines 8-18: Base images array and duplication logic
- `script.js` lines 20-26: Animation classes array
- `script.js` lines 70-140: Audio alternation and synchronization
- `styles.css` lines 90-227: Animation keyframes and classes</content>
  <parameter name="filePath">/Users/goodnessade/Documents/abby/.github/copilot-instructions.md
