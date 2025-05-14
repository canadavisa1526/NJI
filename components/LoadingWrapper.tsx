'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Store whether this is the first load in a ref to persist across renders
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Check if this is the home page
    const isHomePage = pathname === '/';

    // Show loader on first load or when navigating to home page
    if (isFirstLoad || isHomePage) {
      setIsLoading(true);

      // Ensure loading is shown for at least 1 second
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (isFirstLoad) {
          setIsFirstLoad(false);
        }
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [pathname, searchParams, isFirstLoad]);

  // If loading, show only the loading component
  if (isLoading) {
    return <Loading />;
  }

  // Otherwise, show the children
  return <>{children}</>;
}
