'use client'; // Ensure the file is treated as a Client Component

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Dropzone from '@/components/dropzone';

export default function Home() {
  useEffect(() => {
    // Title animation (fade and slide up)
    gsap.from('.title', {
      opacity: 0,
      y: 100, // Make it slide from further down
      duration: 1.5, // Slow down the duration
      ease: 'power3.out', // Use a smoother easing for a more natural feel
    });

    // Description animation (fade and slide up)
    gsap.from('.description', {
      opacity: 0,
      y: 50, // Slight slide for a more gradual effect
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.3, // Delay the description animation slightly
    });

    // Dropzone animation (fade and scale up from smaller size)
    gsap.from('.dropzone', {
      opacity: 0,
      scale: 0.9, // Start slightly smaller
      duration: 1.5,
      ease: 'back.out(1.7)', // A springy effect that pops in more
      delay: 0.6, // Delay it a bit more for a staggered feel
    });
  }, []);

  return (
    <div className="space-y-16 pb-8">
      {/* Title + Description */}
      <div className="space-y-6">
        <h1 className="title text-3xl md:text-5xl font-medium text-center text-gradient">
            Transform your files for free, effortlessly!
        </h1>
        <p className="description text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Discover Proba: your go-to online solution for hassle-free multimedia conversion. Whether it’s images, audio, or video, Proba lets you transform your files effortlessly and without limits. Get started now and elevate your content with ease!
        </p>
      </div>

      {/* Upload Box */}
      <div className="dropzone">
        <Dropzone />
      </div>
    </div>
  );
}
