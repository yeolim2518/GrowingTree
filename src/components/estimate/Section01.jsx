import { useRecoilState } from "recoil";
import { step1State } from "../../store/customer";
import Step1Form from "../form/Step1Form";
import Step2Form from "../form/Step2Form";
import { useEffect } from "react";

const Section01 = () => {
  const [step1Value, setStep1State] = useRecoilState(step1State);
  
  useEffect(() => {
    setStep1State(null);

    return () => {
      setStep1State(null);
    };
  }, [setStep1State]);

  return (
    <section className="section01">
      <div className="center">
        <div className="customer-text">
          <h3 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
            나에게 맞는 물류 서비스 지금
            <strong>
              <span className="color">전문가의 맞춤 상담을 예약</span>
            </strong>
            하세요.
          </h3>
          <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
            물류상황에 맞는 상품정보를 작성해 견적을 내보세요.
          </p>
        </div>
  
        <div className="step">
          <div className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">
            <span className={`${step1Value ? '' : 'active'}`}>Step 1</span>
            <span>상품정보 입력</span>
          </div>
          <div className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
            <span className={`${step1Value ? 'active' : ''}`}>Step 2</span>
            <span>기본정보 입력</span>
          </div>
        </div>

        {
          step1Value ? <Step2Form /> : <Step1Form />
        }
        
      </div>
    </section>
  );
}

export default Section01;
