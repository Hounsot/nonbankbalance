import { useLayoutEffect, type RefObject } from 'react';

// The URL describes the visible prototype state for analytics. In-app
// navigation still owns the screen state and the browser history stays intact.
export function usePrototypeUrl(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sync = () => {
      const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-prototype-screen]'));
      let leaf = nodes.reverse().find(node => !node.closest('[data-prototype-inactive]'));
      const segments: string[] = [];
      while (leaf && root.contains(leaf)) {
        const screen = leaf.dataset.prototypeScreen;
        if (screen) segments.unshift(screen);
        leaf = leaf.parentElement ?? undefined;
      }

      const url = new URL(window.location.href);
      url.searchParams.set('screen', segments.join('/') || root.dataset.prototypePage || 'payments');
      url.searchParams.set('scenario', root.dataset.prototypeScenario || 'filled');
      if (url.href !== window.location.href) {
        window.history.replaceState(window.history.state, '', url);
      }
    };

    const observer = new MutationObserver(sync);
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['data-prototype-page', 'data-prototype-scenario', 'data-prototype-screen', 'data-prototype-inactive'],
    });
    sync();
    return () => observer.disconnect();
  }, [rootRef]);
}
