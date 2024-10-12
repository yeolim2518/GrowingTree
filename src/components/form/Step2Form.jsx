import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { step1State } from "../../store/customer";
import useCustomer from "../../hooks/useCustomer";
import { useNavigate } from "react-router-dom";
import { modalState } from "../../store/modal";

const Step2Form = () => {
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);
  const [step1Value, setStep1State] = useRecoilState(step1State);
  const saveEstimate = useCustomer();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const submit = async (data) => {
    const form = {
      ...step1Value,
      ...data,
    };

    try {
      await saveEstimate.saveEstimate.mutateAsync(form);
      alert('저장되었습니다.');
      setStep1State(null);
      navigate('/customer/estimate');
    } catch {
      alert('문제가 발생하였습니다. 다시 이용해주시기 바랍니다.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const openPopup = () => {
    setModal(true);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-item">
          <label className="label">회사명</label>
          <div className="input">
            <input type="text" {...register('company', { required: true })} placeholder="회사명을 입력해 주세요." />
            {errors.company && <div className="errors">회사명을 입력해 주세요.</div>}
          </div>
        </div>
        <div className="row">
          <div className="form-item">
            <label className="label">담당자명</label>
            <div className="input">
              <input type="text" {...register('name', { required: true })} placeholder="담당자명을 입력해 주세요." />
              {errors.name && <div className="errors">담당자명을 입력해 주세요.</div>}
            </div>
          </div>
          <div className="form-item">
            <label className="label">연락처</label>
            <div className="input">
              <input type="text" {...register('phone', { required: true })} placeholder="연락처를 입력해 주세요." />
              {errors.phone && <div className="errors">연락처를 입력해 주세요.</div>}
            </div>
          </div>
        </div>
        <div className="form-item email">
          <label className="label">이메일</label>
          <div>
            <div className="input">
              <input type="email" {...register('email', { required: true })} placeholder="이메일을 입력해 주세요." />
            </div>
            {errors.email && <div className="errors">이메일을 입력해 주세요.</div>}
          </div>
        </div>
        <div className="form-item agree">
          <label className="label">
            개인정보처리방침
          </label>
          <div className="input">
            <div>
              <button type="button" onClick={openPopup}>약관 확인하기</button>
              <div>
                <input id="agree" {...register('agree', { required: true })} type="checkbox" />
                <label htmlFor="agree" />
                <p>개인정보 수집 및 이용에 동의합니다.</p>
              </div>
            </div>
            {errors.agree && <div className="errors">약관에 동의해주세요.</div>}
          </div>
        </div>
        <button type="submit">문의하기</button>
      </form>
    </div>
  )
};

export default Step2Form;