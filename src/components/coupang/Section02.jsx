import { useState } from "react";

const Section02 = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section02 bigger-slide">
      <div className="center">
        <div className="main-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
            <strong>
              쿠팡 쉽먼트의 까다로운 배송조건<br/>
              <span className="color">
                엠케이엠 풀필먼트는 빠르고 완벽하게 해결합니다.
              </span>
            </strong>
          </h2>
        </div>
       
        <div className="content">
          <ul>
            <li onMouseEnter={() => setActive(1)} className={`${active === 1 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.3s">
              <div>
                <h3>규격포장</h3>
                <p>체계적인 상품 배송</p>
              </div>
            </li>
            <li onMouseEnter={() => setActive(2)} className={`${active === 2 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.6s">
              <div>
                <h3>등록명세서&거래내역서 출력</h3>
                <p>체계적인 상품 배송</p>
              </div>
            </li>
            <li onMouseEnter={() => setActive(3)} className={`${active === 3 ? 'on' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay="0.9s">
              <div>
                <h3>쉽먼트 라벨 부착</h3>
                <p>정확한 출고 관리</p>
              </div>
            </li>
          </ul>
  
          <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.2s">
            <strong>체계적이고 전문적인 시스템</strong>으로 쿠팡 배송의 모든 것을 <strong>엠케이엠이 도와드리겠습니다.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section02;
