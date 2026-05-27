import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
function IconBase({ children, size = 22, ...props }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}
export const MenuIcon = (p: IconProps) => <IconBase {...p}><path d="M4 7h16M4 12h16M4 17h16" /></IconBase>;
export const XIcon = (p: IconProps) => <IconBase {...p}><path d="M18 6 6 18M6 6l12 12" /></IconBase>;
export const ArrowRight = (p: IconProps) => <IconBase {...p}><path d="M5 12h14M13 5l7 7-7 7" /></IconBase>;
export const Shield = (p: IconProps) => <IconBase {...p}><path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" /><path d="m8.8 12.2 2 2 4.5-5" /></IconBase>;
export const MapPin = (p: IconProps) => <IconBase {...p}><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></IconBase>;
export const FileCheck = (p: IconProps) => <IconBase {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M14 3v6h6M8.5 15l2 2 4.5-5" /></IconBase>;
export const Users = (p: IconProps) => <IconBase {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></IconBase>;
export const Activity = (p: IconProps) => <IconBase {...p}><path d="M3 12h4l3-8 4 16 3-8h4" /></IconBase>;
export const Lock = (p: IconProps) => <IconBase {...p}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></IconBase>;
export const Briefcase = (p: IconProps) => <IconBase {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" /></IconBase>;
export const Settings = (p: IconProps) => <IconBase {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 3.1-.2-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-3.6v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.2.1L6.4 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H5v-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L6.4 7l1.8-3.1.2.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V2.5h3.6v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.2-.1L19.6 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4h-.2a1.7 1.7 0 0 0-1.4 1Z" /></IconBase>;
export const Upload = (p: IconProps) => <IconBase {...p}><path d="M12 16V4M7 9l5-5 5 5M5 20h14" /></IconBase>;
export const Check = (p: IconProps) => <IconBase {...p}><path d="M20 6 9 17l-5-5" /></IconBase>;
