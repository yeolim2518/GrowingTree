const Section04 = () => {
  const list1 = [
    { span: '높아지는 고객 니즈를 만족하는', strong: 'Kor-reno의 속도', img: 'mainicon09.png' },
    { span: '만족도 100%에 수렴하는', strong: 'Kor-reno의 정확성', img: 'mainicon10.png' },
  ];

  const list2 = [
    { span: '클라이언트의 불편을 해소하는', strong: 'Kor-reno의 피드백', img: 'mainicon11.png' },
    { span: '고객의 요구사항에 맞는 맟춤 인테리어', strong: 'Kor-reno의 전문성', img: 'mainicon12.png' },
  ]

  return (
    <section className="section04">
      <div className="center">
        <div className="main-title">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
            <strong>
              <span>
                빠르고 정확한 
              </span>
              Kor-reno
            </strong>
          </h2>
        </div>
        <ul className="list">
          {
            list1.map((value, index) => (
              <li key={index} className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay={`${0.3 * (index + 1)}s`}>
                <img src={`/images/main/${value.img}`} alt="이미지" />
                <div>
                  <span>{value.span}</span>
                  <strong>{value.strong}</strong>
                </div>
              </li>
            ))
          }
        </ul>

        <div className="main-title">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
            <strong>
              <span>
                꼼꼼하고 확실한 
              </span>
              Kor-reno
            </strong>
          </h2>
        </div>
        <ul className="list">
          {
            list2.map((value, index) => (
              <li key={index} className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay={`${0.3 * (index + 1)}s`}>
                <img src={`/images/main/${value.img}`} alt="이미지" />
                <div>
                  <span>{value.span}</span>
                  <strong>{value.strong}</strong>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Section04;