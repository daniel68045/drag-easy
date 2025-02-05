import { makeDraggable } from "../src/drag-easy";

test("should attach event listeners to element", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  makeDraggable(div);

  expect(div.style.position).toBe("absolute");
  expect(div.style.cursor).toBe("grab");
});
