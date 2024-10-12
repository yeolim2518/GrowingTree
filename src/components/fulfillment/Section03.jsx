import { useEffect, useState } from "react";

const data = [
  {
    title: '업무 계약',
    list: ['전담 매니저 배정', '솔루션 계정 등록', '상품등록']
  },
  {
    title: '물류 관리',
    list: ['입고일정 확인', '바코드 조사', '입고상품 스캔']
  },
  {
    title: '주문 관리',
    list: ['주문 수집', '피킹 리스트생성', '로케이션 피킹']
  },
  {
    title: '출고 관리',
    list: ['바코드스캔', '상품패킹', '택배발송']
  },
  {
    title: '반품 관리',
    list: ['정보 인입', '회수 및 출고', '반품 처리완료']
  },
  {
    title: '정산 관리',
    list: ['물류비 정산', '택배비 정산', '월정산 리포트']
  }
]

const Section03 = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % 6);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [active]);

  return (
    <section className="section03">
      <div className="center">
        <div className="main-title">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0">
            <strong>
              간단해서 더 좋은
              <span className="color">
                엠케이엠 프로세스
              </span>
            </strong>
          </h2>
          <p className="sub-text  wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3">
            계약부터 정산까지
          </p>
        </div>
  
        <div className="content">
          <ul>
            {
              data.map(({ list, title }, index) => (
                <li key={index} className={`${active === index ? 'active' : ''} wow fadeInUp`} data-wow-duration="1.5s" data-wow-delay={`${0.3 * (index + 2)}s`}>
                  <div className="header">
                    <span>{`STEP${index + 1}`}</span>
                    <span>{title}</span>
                  </div>
                  <div className="list">
                    {
                      list.map((value, i) => (
                        <div key={i}>{value}</div>
                      ))
                    }
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Section03;
