'use client';
import { lazy, Suspense } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <div className="spline-hero container px-2 text-xl sm:px-4 md:px-6 lg:px-10 xl:px-24">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/dOPWAvYUrmRxpApV/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default HeroSection;
