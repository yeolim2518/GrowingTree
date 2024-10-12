import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Banner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['하우스 인테리어, 페인트'],
      typeSpeed: 60,
      startDelay: 100,
      backDelay: 2000,
      backSpeed: 80,
      loop: true,
      showCursor: true
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="banner">
      <div className="video">
        <video className="pc" src="/videos/img_main.mp4" autoPlay loop muted playsInline />
      </div>
      <div className="banner-text">
        <h1>
          <div>
            <strong ref={textRef}>하우스 인테리어, 페인트</strong>
          </div>
          Kor-reno & painting
        </h1>
        <p>
          고객중심의 인테리어 서비스<br/>
          Kor-reno & painting 에서 시작합니다.
        </p>
        <div className="scrollDown">
          <p className="down">Scroll Down</p>
          <p className="up">Scroll Up</p>
          <i><span className="blind">스크롤아이콘</span></i>
        </div>
      </div>
    </div>
  )
};

export default Banner;