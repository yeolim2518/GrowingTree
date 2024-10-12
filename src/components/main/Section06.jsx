import { Link } from "react-router-dom";

const Section06 = () => (
  <section className="section06 bottom-banner">
    <div className="main-title">
      <span className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">간편 견적 서비스</span>
      <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
        <strong>
          나에게 맞는 Renovation<br />
          지금 전문가의 상담을 받아보세요.
        </strong>
      </h2>
      <Link to="/customer" className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">Click</Link>
    </div>
  </section>
);

export default Section06;