import { useEffect, useState } from "react";

const Section02 = () => {
  const list = ['편리한 상담', '고객의 니즈 충족', '현장방문 컨설팅', '맞춤 서비스', '전담 매니저 제도', '실시간 커뮤니티', '품질관리', '꼼꼼한 작업관리']
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % 8);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [active]);

  return (
    <section className="section02">
      <div className="center">
        <div className="main-title">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
            <strong>
              Kor-reno & painting<br/>
              확실한 업무처리
            </strong>
          </h2>
          <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">Kor-reno & painting에서 <strong>눈에 보이는 변화를 약속</strong>합니다!</p>
        </div>
        <ul className="list">
          {
            list.map((value, index) => (
              <li key={index} className={`${active === index ? 'active' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay={`${0.2 * (index + 2)}s`}>
                <span className="number">{`0${index + 1}`}</span>
                <span className="title">{value}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Section02;