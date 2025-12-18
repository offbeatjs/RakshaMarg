import { useLayoutEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SceneController = () => {
  const { camera } = useThree();
  const timeline = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    
    camera.position.set(0, 8, 12);
    camera.lookAt(0, 0, 0);

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "body", 
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, 
      },
    });

    
    timeline.current.to(camera.position, {
      x: 3,
      y: 1.5,
      z: 5,
      duration: 2,
      ease: "power2.inOut"
    });
    
    
    timeline.current.to(camera.position, {
      x: -4,
      y: 6,
      z: -2,
      duration: 2,
      ease: "power1.inOut"
    });

    return () => {
      if (timeline.current) timeline.current.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [camera]);

  return null;
};