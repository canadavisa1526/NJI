"use client";

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value}`);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Send to Google Analytics
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          });
        }
      }
    };

    // Measure Core Web Vitals
    const measureWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS(reportWebVitals);
        getFID(reportWebVitals);
        getFCP(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      } catch (error) {
        console.warn('Web Vitals measurement failed:', error);
      }
    };

    // Performance observer for additional metrics
    const observePerformance = () => {
      if ('PerformanceObserver' in window) {
        // Observe navigation timing
        const navObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              
              // Calculate custom metrics
              const metrics = {
                domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
                firstByte: navEntry.responseStart - navEntry.requestStart,
                domInteractive: navEntry.domInteractive - navEntry.navigationStart,
              };

              if (process.env.NODE_ENV === 'development') {
                console.log('Navigation Metrics:', metrics);
              }
            }
          }
        });

        try {
          navObserver.observe({ entryTypes: ['navigation'] });
        } catch (error) {
          console.warn('Navigation observer failed:', error);
        }

        // Observe resource timing
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              
              // Monitor slow resources
              const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
              if (loadTime > 1000) { // Resources taking more than 1 second
                if (process.env.NODE_ENV === 'development') {
                  console.warn(`Slow resource detected: ${resourceEntry.name} (${loadTime}ms)`);
                }
              }
            }
          }
        });

        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.warn('Resource observer failed:', error);
        }

        // Observe long tasks
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'longtask') {
              if (process.env.NODE_ENV === 'development') {
                console.warn(`Long task detected: ${entry.duration}ms`);
              }
            }
          }
        });

        try {
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (error) {
          console.warn('Long task observer failed:', error);
        }
      }
    };

    // Memory usage monitoring
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memInfo = (performance as any).memory;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Memory Usage:', {
            used: Math.round(memInfo.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(memInfo.totalJSHeapSize / 1048576) + ' MB',
            limit: Math.round(memInfo.jsHeapSizeLimit / 1048576) + ' MB'
          });
        }

        // Warn if memory usage is high
        const usagePercent = (memInfo.usedJSHeapSize / memInfo.jsHeapSizeLimit) * 100;
        if (usagePercent > 80) {
          console.warn(`High memory usage detected: ${usagePercent.toFixed(2)}%`);
        }
      }
    };

    // Connection quality monitoring
    const monitorConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        
        if (process.env.NODE_ENV === 'development') {
          console.log('Connection Info:', {
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
            saveData: connection.saveData
          });
        }

        // Adapt behavior based on connection
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Disable heavy animations or reduce image quality
          document.body.classList.add('slow-connection');
        }
      }
    };

    // Initialize monitoring
    measureWebVitals();
    observePerformance();
    
    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);
    
    // Monitor connection once
    monitorConnection();

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default PerformanceMonitor;
