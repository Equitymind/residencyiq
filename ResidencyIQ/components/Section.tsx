import type { HTMLAttributes, ReactNode } from 'react';

export function PageContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container-lux ${className}`}>{children}</div>;
}

export function Section({ children, className = '', ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return <section className={`section-pad ${className}`} {...props}>{children}</section>;
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass-panel rounded-lg p-5 sm:p-6 ${className}`}>{children}</div>;
}
