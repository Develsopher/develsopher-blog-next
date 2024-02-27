import HeroSection from '../components/Home/HeroSection';
import { allBlogs } from '../../.contentlayer/generated';
export default function App() {
  console.log('hello world');
  // console.log(allBlogs);
  return (
    <div className="min-h-[2000px] overflow-y-auto">
      {/* <HeroSection /> */}
    </div>
  );
}
