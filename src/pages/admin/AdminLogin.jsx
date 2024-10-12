import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const AdminLogin = () => {
  const { login, user } = useAuth();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
      await login.mutateAsync(data);
      navigation('/admin');
    } catch {
      setError('id', {});
    }
  };

  useEffect(() => {
    if (user.data) {
      navigation('/admin');
    }
  }, [user.data, navigation]);
  
  return (
    <div className="admin-login">
      <div className="center">
        <div className="left">
          <div>
            <img src="/images/admin/login/logo.png" />
            <h2>
              <strong>
                성장하는 기업의 성공적인 물류<br/>
              </strong>
              엠케이엠 풀필먼트
            </h2>
          </div>
        </div>
        <div className="right">
          <h1><strong><span className="color">관리자페이지</span> 전용 로그인</strong></h1>
          <p>엠케이엠에 오신 것을 환영합니다.</p>
          <form onSubmit={handleSubmit(submit)}>
            <div className="input">
              <i className="user" />
              <input type="text" {...register('id', { required: true })} placeholder="아이디를 입력하세요." />
            </div>
            <div className="input">
              <i className="password" />
              <input type="password" {...register('password', { required: true })} placeholder="비밀번호를 입력하세요." />
            </div>
            {(errors.id || errors.password) && <div className="errors">아이디 또는 비밀번호를 확인하세요.</div>}
            <button>로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
