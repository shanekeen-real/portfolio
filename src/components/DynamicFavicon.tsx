"use client";

import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export function DynamicFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateFavicon = () => {
      // Get the favicon link element
      let favicon = document.querySelector('link[rel="icon"]')! as HTMLLinkElement;
      
      // If no favicon exists, create one
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }

      // Update favicon based on theme
      if (resolvedTheme === 'dark') {
        favicon.href = '/favicon logo_white.png';
      } else {
        favicon.href = '/favicon logo_back.png';
      }

      // Also update apple-touch-icon if it exists
      const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]')! as HTMLLinkElement;
      if (appleTouchIcon) {
        if (resolvedTheme === 'dark') {
          appleTouchIcon.href = '/favicon logo_white.png';
        } else {
          appleTouchIcon.href = '/favicon logo_back.png';
        }
      }

      // Update shortcut icon as well
      const shortcutIcon = document.querySelector('link[rel="shortcut icon"]')! as HTMLLinkElement;
      if (shortcutIcon) {
        if (resolvedTheme === 'dark') {
          shortcutIcon.href = '/favicon logo_white.png';
        } else {
          shortcutIcon.href = '/favicon logo_back.png';
        }
      }
    };

    // Update favicon when theme changes
    updateFavicon();
  }, [resolvedTheme]);

  // Also update favicon on initial load to handle theme detection
  useEffect(() => {
    const updateInitialFavicon = () => {
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Get the favicon link element
      const favicon = document.querySelector('link[rel="icon"]')! as HTMLLinkElement;
      
      if (favicon) {
        // Set initial favicon based on system preference
        if (prefersDark) {
          favicon.href = '/favicon logo_white.png';
        } else {
          favicon.href = '/favicon logo_back.png';
        }
      }
    };

    // Run on initial load
    updateInitialFavicon();
  }, []);

  return null; // This component doesn't render anything
}
