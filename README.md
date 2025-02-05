## drag-easy-components

A lightweight JavaScript library for creating draggable web components

## Installation

Using NPM:

```bash
npm install drag-easy
```

Using a `<script>` tag (UMD version):

```JavaScript
<script src="node_modules/drag-easy/dist/drag-easy.umd.js"></script>
```

Basic Usage

```JavaScript
import { makeDraggable } from "drag-easy";
const box = document.getElementById("box");
makeDraggable(box);
```

HTML (Without a Bundler)

```HTML
<script src="node_modules/drag-easy/dist/drag-easy.umd.js"></script>
<script>
    const box = document.getElementById("box");
    DragEasy.makeDraggable(box);
</script>
```

## Documentation

For more details, visit the official [documentation](https://drageasycomponents.com).
