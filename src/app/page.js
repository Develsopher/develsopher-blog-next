import FeaturedPosts from '../components/Home/FeaturedPosts';
import HeroSection from '../components/Home/HeroSection';
import { allBlogs } from 'contentlayer/generated';
import RecentPosts from '../components/Home/RecentPosts';
export default function App() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </>
  );
}
