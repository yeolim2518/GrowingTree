import { Link } from 'react-router-dom';
import { link } from '../../data/nav';

const Nav = () => {
  return (
    <nav>
      <div id="gnbBg"></div>
      <ul className="main-menu">
        {
          Object.entries(link).map(([key, value]) => (
            <li key={key}>
              <span>{value.name}</span>
              <ul className="sub-menu">
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
    </nav>
  )
};

export default Nav;