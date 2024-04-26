import { useEffect } from 'react';
import LoaderImg from "../assets/images/loader.gif";

function Loader() {
  useEffect(() => {
    const preloader = document.getElementById('preloader') as HTMLElement;
    const loader = document.querySelector('.preloader') as HTMLElement;

    if (preloader && loader) {
      const fadeOut = () => {
        setTimeout(() => {
          preloader.style.transition = 'opacity 0.5s ease';
          loader.style.transition = 'opacity 0.5s ease';
          preloader.style.opacity = '0';
          loader.style.opacity = '0';
        }, 500);
      };

      fadeOut();

      return () => {
        preloader.style.transition = '';
        loader.style.transition = '';
      };
    }
  }, []);

  return (
    <div id="preloader">
      <img className="preloader" src={LoaderImg} alt="Loading..." />
    </div>
  );
}

export default Loader;
