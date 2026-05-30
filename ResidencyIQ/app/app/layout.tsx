import { MockProfileProvider } from '@/components/MockProfileProvider';

export default function AppAreaLayout({ children }: { children: React.ReactNode }) {
  return <MockProfileProvider>{children}</MockProfileProvider>;
}
