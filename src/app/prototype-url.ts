import { useLayoutEffect, type RefObject } from 'react';

// Give each visible screen a distinct history entry for research analytics.
export function usePrototypeUrl(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let initial = true;
    let restoring = false;
    let restoreTimer: number | undefined;
    const onPopState = () => {
      restoring = true;
      window.clearTimeout(restoreTimer);
      restoreTimer = window.setTimeout(() => { restoring = false; }, 100);
    };
    window.addEventListener('popstate', onPopState);
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
      const screen = segments.join('/') || root.dataset.prototypePage || 'payments';
      url.searchParams.set('screen', screen);
      url.searchParams.set('scenario', root.dataset.prototypeScenario || 'filled');
      const active = Array.from(root.querySelectorAll<HTMLElement>('[data-prototype-screen]')).reverse().find(node => !node.closest('[data-prototype-inactive]'));
      const heading = active?.querySelector('h1, h2, [role="heading"]')?.textContent?.trim();
      document.title = heading || ({ home: 'Главная', payments: 'Платежи', wallet: 'Внешние балансы' } as Record<string, string>)[screen] || screen;
      if (url.href !== window.location.href) {
        if (initial) window.history.replaceState(window.history.state, '', url);
        else if (!restoring) window.history.pushState(window.history.state, '', url);
      }
      initial = false;
    };

    const observer = new MutationObserver(sync);
    observer.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['data-prototype-page', 'data-prototype-scenario', 'data-prototype-screen', 'data-prototype-inactive'],
    });
    sync();
    return () => { observer.disconnect(); window.removeEventListener('popstate', onPopState); window.clearTimeout(restoreTimer); };
  }, [rootRef]);
}
