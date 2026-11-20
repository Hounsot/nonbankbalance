import type { ReactNode } from 'react';

export function PhoneFrame({ children }: { children: ReactNode }) {
  return <div style={{ position: 'relative', width: '100%', maxWidth: 440, height: '100%', overflow: 'hidden', background: '#fff' }}>{children}</div>;
}
