'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const listenToScroll = () => {
      // let heightToHidden = 250;
      // const winScroll =
      //   document.body.scrollTop || document.documentElement.scrollTop;

      // if (window.pageYOffset > 500) {
      //   setIsVisible(true);
      // } else {
      //   setIsVisible(false);
      // }
      console.log('listend');
    };
    console.log('hell useEffect');

    window.addEventListener('scroll', listenToScroll);

    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  console.log('isVisible', isVisible);

  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center">
      {isVisible && (
        <div onClick={goToBtn}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
