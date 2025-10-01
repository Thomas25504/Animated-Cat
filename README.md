# Animated Cat Sprite

A simple HTML/CSS/JavaScript project that animates a horizontally stacked cat sprite sheet. When you hover over the cat, a “meow” speech bubble appears just above its head. The project includes scaling support, so the cat can be displayed at any size (in this example, 20× scale).

## Features

- Animates a horizontal sprite sheet frame by frame.
- Adjustable frame rate via JavaScript (`fps`).
- Hover bubble shows “MEOW” above the cat.
- Bubble can be positioned and scaled relative to the sprite.
- Pixel-art-friendly scaling using `image-rendering: pixelated`.
- Fully responsive to sprite scale adjustments.

## Demo

&#x20;*(Replace with your own GIF or screenshot if desired)*

## Installation / Usage

1. Clone or download this repository.
2. Place your sprite sheet image (`spritesheet.png`) in the project folder.
   - The sprite sheet should have frames stacked horizontally.
   - Each frame must be the same width and height.
3. Open `index.html` in a browser.

## Project Structure

```
project-folder/
├─ index.html        # Main HTML file
├─ spritesheet.png   # Horizontal cat sprite sheet
└─ README.md         # Project documentation
└─ main.js         # Javascript file
```

## Configuration

### Frame size and scaling

In the `<script>` section of `index.html`:

```javascript
const frameWidth = 32;   // width of a single frame in px
const frameHeight = 32;  // height of a single frame in px
const totalFrames = 4;   // number of frames in the sprite sheet
const scale = 20;        // scaling factor
const fps = 5;           // frames per second
```

- Adjust `frameWidth` and `frameHeight` to match your sprite frames.
- Adjust `scale` to make the cat bigger or smaller.
- Adjust `fps` for faster or slower animation.

### Bubble customization

In the CSS `.bubble` class:

```css
.bubble {
  font-size: 50px;             /* text size */
  padding: 20px 30px;          /* bubble size */
  top: 20px;                   /* vertical position above cat */
  left: 50%;                   /* horizontal alignment */
  transform: translateX(-60%); /* shift left/right */
}
```

- Modify `top` to move the bubble up/down relative to the cat.
- Modify `translateX` to move the bubble left or right.
- Adjust `font-size` and `padding` to make the bubble larger or smaller.

## License

This project is free to use and modify. No restrictions.

