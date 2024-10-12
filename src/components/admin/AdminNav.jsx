import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNav = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);
  const clicnNav = (index) => {
    setActive(index);
  };

  return (
    <nav>
      <div className="logo">
        <img src="/images/admin/customer/admin_logo.png" />
      </div>
      <div>
        <ul>
          <li className={`main-nav ${active === 1 ? 'on' : ''}`} onClick={() => clicnNav(1)}>
            <span><i />고객센터</span>
            <ul>
              <li className={`sub-nav ${pathname.includes('counseling') ? 'active' : ''}`}><Link to="/admin/counseling">간편상담</Link></li>
              <li className={`sub-nav ${pathname.includes('estimate') ? 'active' : ''}`}><Link to="/admin/estimate">물류견적</Link></li>
            </ul>
          </li>
          <li className={`main-nav ${active === 2 ? 'on' : ''}`} onClick={() => clicnNav(2)}>
            <span><i />방문자 통계</span>
            <ul>
              <li className={`sub-nav ${pathname.includes('statics') ? 'active' : ''}`}><Link to="/admin/statics">방문자 통계</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default AdminNav;
