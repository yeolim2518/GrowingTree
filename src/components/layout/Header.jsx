import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import PcNav from './PcNav';
import { throttle } from '../../utils/time';
import InitComponent from './InitComponent';
import { useRecoilState } from 'recoil';
import { navState } from '../../store/nav';

const Header = () => {
  const [nav, setNav] = useRecoilState(navState);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const wheelHandler = throttle(() => {
      setIsScroll(!!window.scrollY);
    }, 100);

    window.addEventListener('scroll', wheelHandler);
    window.requestTalkBannerInfo?.();
    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  const close = () => {
    setNav(false);
  }

  return (
    <header className={`header ${isScroll ? 'on' : ''} ${nav ? 'on' : ''}`}>
      <InitComponent />
      <div className="logo">
        <Link to="/">
          <img src="/images/main/20241012_임시로고.png" />
          <img src="/images/main/20241012_임시로고.png" />
        </Link>
      </div>
      <Nav />
      <div className="right">
        <div className="line-btn" onClick={() => setNav((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {
        nav && <PcNav close={close} />
      }
    </header>
  )
};

export default Header;