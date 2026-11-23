import type { ReactNode } from 'react';

export function PhoneFrame({ children, scrollPage = false }: { children: ReactNode; scrollPage?: boolean }) {
  return <div style={{ position: 'relative', width: '100%', maxWidth: 440, height: scrollPage ? 'auto' : '100%', minHeight: scrollPage ? '100dvh' : undefined, overflow: scrollPage ? 'visible' : 'hidden', background: '#fff' }}>{children}</div>;
}
