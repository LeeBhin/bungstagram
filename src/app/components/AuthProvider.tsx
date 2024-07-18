'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && pathname != '/login' && pathname != '/signup' && pathname != '/') {
        alert('로그인이 필요합니다.')
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  return <>{children}</>;
};

export default AuthProvider;