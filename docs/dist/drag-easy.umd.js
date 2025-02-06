(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DragEasy = {}));
})(this, (function (exports) { 'use strict';

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;
        element.style.position = "absolute";
        element.style.cursor = "grab";
        element.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            element.style.cursor = "grabbing";
        });
        document.addEventListener("mousemove", (e) => {
            if (!isDragging)
                return;
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        });
        document.addEventListener("mouseup", () => {
            isDragging = false;
            element.style.cursor = "grab";
        });
    }

    exports.makeDraggable = makeDraggable;

}));
//# sourceMappingURL=drag-easy.umd.js.map
