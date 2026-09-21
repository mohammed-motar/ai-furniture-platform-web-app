import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { CartStoreProvider } from '@/lib/store/cart-store-provider';
import { ChatStoreProvider } from '@/lib/store/chat-store-provider';
import { SanityLive } from '@/sanity/lib/live';
import { ClerkProvider } from '@clerk/nextjs';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <Header />
          <main>{children}</main>
          <Toaster position='bottom-center' />

          {/* Makes sanity realtime */}
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default layout;
