import { smart } from "../../data/solution";

const Section02 = () => (
  <section className="section02">
    <div className="center">
      <div className="main-title">
        <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
          <strong>
            실시간으로 조회하는
            <span className="color">
              스마트 물류시스템
            </span>
          </strong>
        </h2>
        <p className="sub-text wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
          <strong>물류의 모든 단계를 실시간으로 조회하는 스마트 시스템</strong>으로<br/>
          효과적인 이커머스 운영이 가능합니다.
        </p>
      </div>

      <div className="content">
        <ul>
          {
            smart.map(({ content, title }, index) => (
              <li key={title} className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay={`${0.3 * index}s`}>
                <div>
                  <span>{`STEP ${(index + 1).toString().padStart(2, '0')}`}</span>
                  <div>
                    <div className="img">
                      <img src={`/images/solution/solution0${(index + 1)}.png`} />
                    </div>
                    <div className="txt">{title}</div>
                  </div>
                </div>
                <div className="over">{content}</div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
)

export default Section02;
