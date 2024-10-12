import { useState } from "react";

const Section02 = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section02 bigger-slide">
      <div className="center">
        <div className="main-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
            <strong>
              계약이 쉽지 않은 단기 물류<br/>
              <span className="color">
                엠케이엠 풀필먼트가 해결해드립니다.
              </span>
            </strong>
          </h2>
        </div>
  
        <div className="content">
          <ul>
            <li onMouseEnter={() => setActive(1)} className={`${active === 1 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.3s">
              <div>
                <h3>쇼핑몰 오픈</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(2)} className={`${active === 2 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.6s">
              <div>
                <h3>크라우드 펀딩</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(3)} className={`${active === 3 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.9s">
              <div>
                <h3>비정기 배송<span>공동구매or사은품</span></h3>
              </div>
            </li>
          </ul>
  
          <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
            일회성 비정기적 물류로 고민하고 계신다면<br />
            대표님의 시작을
            <strong>엠케이엠이 도와드리겠습니다.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section02;
