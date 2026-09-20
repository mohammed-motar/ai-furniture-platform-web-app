import { SanityLive } from '@/sanity/lib/live';
import { ClerkProvider } from '@clerk/nextjs';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <main>{children}</main>
      {/* Makes sanity realtime */}
      <SanityLive />
    </ClerkProvider>
  );
}

export default layout;
