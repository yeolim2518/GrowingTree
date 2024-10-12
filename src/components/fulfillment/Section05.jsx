import { Link } from "react-router-dom";

const Section05 = () => (
  <section className="section05 bottom-banner">
    <div className="main-title">
      <span className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0">간편 견적 서비스</span>
      <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
        <strong>
          나에게 맞는 물류서비스<br />
          지금 전문가의 상담을 받아보세요.
        </strong>
      </h2>
      <Link to="/customer" className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">Click</Link>
      <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
        엠케이엠 풀필먼트 서비스에 관한 문의는<br/>
        고객센터 070-7727-0824 또는 견적안내 1:1 문의를 이용해 주세요.
      </p>
    </div>
  </section>
);

export default Section05;