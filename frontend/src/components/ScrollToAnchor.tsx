import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';

const ScrollToAnchor = () => {
  const { hash } = useLocation();
  const lenis = useLenis();
  const isMounted = useRef(false);

  useEffect(() => {
    if (hash && lenis) {
      // The id usually matches the hash without the '#' character
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Scroll to the element using Lenis
        lenis.scrollTo(element, { 
          offset: -50, // Adjust this buffer (e.g., for fixed navbar height)
          duration: 1.5 
        });
      }
    }
  }, [hash, lenis, useLocation]);

  return null;
};

export default ScrollToAnchor;