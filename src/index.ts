import { isElementVisible } from './utils/isElementVisible';

function lark(el: Element | string | null) {
  // assume el is a HTMLElement
  if (typeof el === 'string') {
    // TODO: need more detailed handle
    el = document.getElementById(el) || document.querySelector(el);
    if (!el) {
      return;
    }
  }

  const elProperty = el!.getBoundingClientRect();
  const isElVisible = isElementVisible(elProperty);

  // Then we can put a floating element at right top corner inside the given element.

  return function floating(floatingElement: Element) {
    (el as Element).prepend(floatingElement);
  };
}
