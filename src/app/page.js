'use client';
import Spline from '@splinetool/react-spline';
import { Button } from '../components/ui/button';

export default function App() {
  return (
    <div className="rounded-xl p-6">
      <Spline scene="https://prod.spline.design/TN2XP94ryaoaZ8-U/scene.splinecode" />
      <p className="font-rb">iam roboto 나는 로토</p>
      <Button>Click ME</Button>
    </div>
  );
}
