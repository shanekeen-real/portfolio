import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// scroll to element with navigation bar offset
export function scrollTo(element: Element | null) {
  if (!element) return;

  // Get the element's position relative to the viewport
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calculate the target scroll position
  // We want the section content to be visible below the navigation bar
  // Navigation bar height: py-8 (32px top + 32px bottom) + content height ≈ 80px
  const navBarHeight = 80;
  
  // Adjust offset based on section type for better positioning
  let sectionOffset = 20; // Default extra spacing
  
  // Check if this is the services section (less top margin)
  if (element.id === 'services') {
    sectionOffset = 60; // More offset for services section
  } else if (element.id === 'projects') {
    sectionOffset = 20; // Keep current offset for projects
  } else if (element.id === 'contact') {
    sectionOffset = 40; // Medium offset for contact section
  }
  
  const targetPosition = scrollTop + rect.top - navBarHeight - sectionOffset;
  
  // Smooth scroll to the calculated position
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}
