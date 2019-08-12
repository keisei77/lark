function lark(el: Element | string | null) {
  // assume el is a HTMLElement
  if (typeof el === 'string') {
    el = document.getElementById(el) || document.querySelector(el);
    if (!el) {
      return;
    }
  }

  const elProperty = el!.getBoundingClientRect();
  const isElementVisible = (rect: ClientRect | DOMRect) =>
    rect.top > 0 &&
    rect.left > 0 &&
    rect.right < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom < (window.innerHeight || document.documentElement.clientHeight);
}
