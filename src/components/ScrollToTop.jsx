// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left corner
  }, [pathname]); // Trigger this effect whenever the path changes

  return null;
};

export default ScrollToTop;
