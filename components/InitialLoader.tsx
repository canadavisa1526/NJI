'use client';

import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

export default function InitialLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader for exactly 1 second
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // If we should show the loader, render it
  if (showLoader) {
    return <Loading />;
  }

  // Otherwise, render nothing
  return null;
}
