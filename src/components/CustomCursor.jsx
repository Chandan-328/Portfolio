import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only instantiate cursor on larger devices
    const isMobile = window.matchMedia('(max-width: 900px)').matches;
    if (isMobile) return;

    // Hide standard cursor
    document.body.style.cursor = 'none';

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // quickTo functions for smooth translation offsets
    const dotX = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3.out" });

    const ringX = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable =
        target.tagName === 'A' ||
        target.closest('a') ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.classList.contains('filter-btn') ||
        target.closest('.filter-btn') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button';

      if (isClickable) {
        document.body.classList.add('hovering-link');
      } else {
        document.body.classList.remove('hovering-link');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('hovering-link');
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Don't render cursor on mobile/tablets
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
