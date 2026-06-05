import React, { useEffect } from 'react';

declare global {
  interface Window {
    L2Dwidget: any;
  }
}

export const Live2DWidget: React.FC = () => {
  useEffect(() => {
    // 1. Check if L2Dwidget is already loaded
    if (window.L2Dwidget) {
      initWidget();
      return;
    }

    // 2. Dynamically load script from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
    script.async = true;
    script.onload = () => {
      initWidget();
    };
    script.onerror = () => {
      console.error('Failed to load Live2D widget script.');
    };
    document.body.appendChild(script);

    return () => {
      // Clean up widget element when component unmounts
      const widgetContainer = document.getElementById('live2d-widget');
      if (widgetContainer) {
        widgetContainer.remove();
      }
    };
  }, []);

  const initWidget = () => {
    if (window.L2Dwidget) {
      window.L2Dwidget.init({
        model: {
          // Classic school uniform anime girl model "Shizuku"
          jsonPath: 'https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
          scale: 1,
        },
        display: {
          position: 'left',
          width: 140,
          height: 260,
          hOffset: 20,
          vOffset: 20,
        },
        mobile: {
          show: false, // Hidden on mobile to avoid blocking layout/content
        },
        react: {
          opacity: 0.95,
        },
        log: false,
      });
    }
  };

  return null;
};
