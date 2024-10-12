import { useEffect, useState } from 'react';
import WOW from 'wow.js';
import ModalBox from '../common/CustomModal';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { navState } from '../../store/nav';
import { loadingState } from '../../store/loading';
import Loading from '../common/Loading';
import useAuth from '../../hooks/useAuth';

const InitComponent = () => {
  const [visible, setVisible] = useState(false);
  const loading = useRecoilValue(loadingState);
  const setNav = useSetRecoilState(navState);
  const { pathname } = useLocation();
  const auth = useAuth();

  useEffect(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNav(false);
    setVisible(false);
  }, [pathname, setNav]);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVisible(false);
  };

  useEffect(() => {
    const wheel = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('wheel', wheel);

    auth.visite.mutate();

    return () => {
      window.removeEventListener('wheel', wheel);
    }
  }, []);

  return (
    <>
      {
        visible && (
          <div onClick={scroll} className="top" />
        )
      }
      <ModalBox />
      {
        loading && <Loading />
      }
    </>
    
  );
};

export default InitComponent;