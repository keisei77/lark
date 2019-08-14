function lark(el: Element | string | null) {
  // assume el is a HTMLElement
  if (typeof el === 'string') {
    el = document.getElementById(el) || document.querySelector(el);
    if (!el) {
      return;
    }
  }

  const elProperty = el!.getBoundingClientRect();
}
