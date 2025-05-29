import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern version of "window.scrollTo"
    // and works better for some browsers.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;