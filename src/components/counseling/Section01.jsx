import CounselingForm from "../form/CounselingForm";

const Section01 = () => (
  <section className="section01">
    <div className="center">
      <div className="customer-text">
        <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
          <strong>
            <span className="color">간편하게 상담</span>
          </strong>
          을 신청하세요.
        </h3>
        <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
          간단한 정보를 남겨주시면 고객님께 맞는 서비스를 확인하여<br/>
          전문 상담원이 빠르게 연락 드립니다.
        </p>
      </div>

      <CounselingForm />
    </div>
  </section>
)

export default Section01;
