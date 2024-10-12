import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const AdminHeader = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    auth.logout.mutate();
    navigate("/");
  };

  return (
    <header>
      <div><strong>관리자님</strong> 반갑습니다. 좋은하루되세요!</div>
      <div>
        <Link to="/admin"><img src="/images/admin/customer/home_icon.png" /></Link>
        <button onClick={logout}><img src="/images/admin/customer/logout_icon.png" /></button>
      </div>
    </header>
  )
};

export default AdminHeader;