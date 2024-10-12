import { Link } from "react-router-dom";
import { link } from "../../data/nav";
import { useState } from "react";

const PcNav = ({ close }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <div className="navArea hidden-xs navON pc">
        <div className="inner">
          <ul className="gnbList">
            {
              Object.entries(link).map(([key, value], index) => (
                <li className={`gnb0${index + 1}`} key={key}>
                  <Link to={`/${key}`}>{value.name}</Link>
                  <div className="subGnb">
                    <ul>
                    {
                      value.list.map((value) => (
                        <li key={value.url}>
                          <Link to={`/${key}${value.url}`}><span>{value.name}</span></Link>
                        </li>
                      ))
                    }
                    </ul>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <button type="button" className="close" onClick={close}>Menu Close</button>
      </div>
      <div className="mobile">
        <nav>
          <div>
            <ul className="mobile-gnbList">
              {
                Object.entries(link).map(([key, value], index) => (
                  <li key={key}>
                    <span to={`/${key}`} onClick={() => handleClick(index)}>{value.name}</span>
                    <ul className={`${activeIndex === index ? 'active' : ''}`}>
                    {
                      value.list.map((value) => (
                        <li key={value.url}>
                          <Link to={`/${key}${value.url}`}><span>{value.name}</span></Link>
                        </li>
                      ))
                    }
                    </ul>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default PcNav;