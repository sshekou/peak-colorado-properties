import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        // Log performance metrics for debugging
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.info('Navigation timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
          });
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.info('LCP:', entry.startTime);
        }
        
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any;
          console.info('FID:', fidEntry.processingStart - entry.startTime);
        }
        
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            console.info('CLS:', clsEntry.value);
          }
        }
      });
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint'] });
      observer.observe({ entryTypes: ['first-input'], buffered: true });
      observer.observe({ entryTypes: ['layout-shift'], buffered: true });
    } catch (error) {
      // Silently fail if browser doesn't support certain entry types
      console.warn('Performance observer not supported:', error);
    }

    return () => observer.disconnect();
  }, []);

  return null;
};