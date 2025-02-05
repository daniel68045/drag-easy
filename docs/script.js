import { makeDraggable } from "../dist/drag-easy.js";

const cube = document.getElementById("draggable-cube");

// Restore position from localStorage or set default position
const savedPosition = JSON.parse(localStorage.getItem("cubePosition"));
if (savedPosition) {
    cube.style.left = savedPosition.x + "px";
    cube.style.top = savedPosition.y + "px";
} else {
    // Default position: Like a title (centered at top)
    cube.style.left = "50%";
    cube.style.top = "20px";
    cube.style.transform = "translateX(-50%)";
}

// Make draggable and save position
makeDraggable(cube, {
    onDragEnd: () => {
        localStorage.setItem("cubePosition", JSON.stringify({
            x: cube.offsetLeft,
            y: cube.offsetTop
        }));
    }
});

