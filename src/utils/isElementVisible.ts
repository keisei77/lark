/**
 * check a element's position is visible in the current viewport
 * https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
 * @param {(ClientRect | DOMRect)} rect
 */
export const isElementVisible = (rect: ClientRect | DOMRect) =>
  rect.top > 0 &&
  rect.left > 0 &&
  rect.right < (window.innerWidth || document.documentElement.clientWidth) &&
  rect.bottom < (window.innerHeight || document.documentElement.clientHeight);
