import Auth from '@/components/Auth';
import { useAuth } from '@/components/shared/auth/AuthProvider';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();

  if (!session || !session.user) {
    return <Auth />;
  }

  return <>{children}</>;
}
