"use client";

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Initialize with a default value (false) for server-side rendering
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      // Create a media query list
      const mediaQuery = window.matchMedia(query);
      
      // Set the initial value
      setMatches(mediaQuery.matches);

      // Define a callback function to handle changes
      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Add the callback as a listener for changes to the media query
      mediaQuery.addEventListener('change', handleChange);

      // Clean up function to remove the listener when the component unmounts
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [query]); // Re-run the effect if the query changes

  return matches;
}
