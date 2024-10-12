import { useForm } from "react-hook-form";
import NumberInput from "./input/NumberInput";
import { useSetRecoilState } from "recoil";
import { step1State } from "../../store/customer";
import { useEffect } from "react";

const Step1Form = () => {
  const setStep1State = useSetRecoilState(step1State);
  const {
    handleSubmit,
    register,
    control,
    setError,
    setFocus,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const submit = (data) => {
    if (data.product?.includes?.('기타') && !data.productText) {
      setError('productText', {});
      setFocus('productText');
      return;
    }

    if (data.product?.includes?.('기타')) {
      data.product.push(data.productText);
    }

    setStep1State(data);
  };

    
  useEffect(() => {
    setStep1State(null);
  }, [setStep1State]);

  return (
    <div className="form wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-item select">
          <label className="label">상품유형</label>
          <div className="input">
            <select className="product-type" {...register('producttype', { required: true })}>
              <option>상품유형을 선택해주세요.</option>
              <option>상온</option>
              <option>냉장냉동</option>
            </select>
            {errors.producttype && <div className="errors">상품유형을 선택해주세요.</div>}
          </div>
        </div>
        <div className="form-item checkbox">
          <label className="label">
            상품정보<br/>
            (중복선택 가능)
          </label>
          <div className="input">
            <label><input {...register('product')} type="checkbox" value="의류" />의류</label>
            <label><input {...register('product')} type="checkbox" value="뷰티" />뷰티</label>
            <label><input {...register('product')} type="checkbox" value="생활" />생활</label>
            <label><input {...register('product')} type="checkbox" value="주방" />주방</label>
            <label><input {...register('product')} type="checkbox" value="유아" />유아</label>
            <label><input {...register('product')} type="checkbox" value="헬스" />헬스</label>
            <label><input {...register('product')} type="checkbox" value="애견" />애견</label>
            <label><input {...register('product')} type="checkbox" value="전자" />전자</label>
            <label>
              <input {...register('product')} type="checkbox" value="기타" />기타
              <input {...register('productText')} type="text" />
              {errors.productText && <div className="errors">입력해주세요.</div>}
            </label>
          </div>
        </div>
        <div className="form-item checkbox">
          <label className="label">
            보관형태<br/>
            (중복선택 가능)
          </label>
          <div className="input">
            <label><input {...register('storage')} type="checkbox" value="경량랙" />경량랙</label>
            <label><input {...register('storage')} type="checkbox" value="파레트랙" />파레트랙</label>
            <label><input {...register('storage')} type="checkbox" value="박스" />박스</label>
            <label><input {...register('storage')} type="checkbox" value="행거랙" />행거랙</label>
          </div>
        </div>
        <div className="text">
          월 보관 및 입/출고량
        </div>
        <div className="form-item store">
          <label className="label">
            월 보관량
          </label>
          <div className="input">
            <div>
              <NumberInput
                  name='count'
                  control={control}
                  placeholder="상품수량"
                />
              <span>개</span>
            </div>
            <div>
              <NumberInput
                  name='pallettrack'
                  control={control}
                  placeholder="파레트랙"
                />
              <span>개</span>
            </div>
            <div>
              <NumberInput
                  name='lightweightrack'
                  control={control}
                  placeholder="경량랙"
                />
              <span>개</span>
            </div>
            <div>
              <NumberInput
                  name='box'
                  control={control}
                  placeholder="박스"
                />
              <span>개</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item  store">
            <label className="label">월 입고량</label>
            <div className="input">
              <div>
                <NumberInput
                  name='import1'
                  control={control}
                  placeholder="월 입고량을 작성해주세요."
                  required
                />
                <span>개</span>
              </div>
              {errors.import1 && <div className="errors">월 입고량을 작성해주세요.</div>}
            </div>
          </div>
          <div className="form-item store">
            <label className="label">월 출고량</label>
            <div className="input">
              <div>
                <NumberInput
                  name='export'
                  control={control}
                  placeholder="월 출고량을 작성해주세요."
                  required
                />
              <span>개</span>
              </div>
            {errors.export && <div className="errors">월 출고량을 작성해주세요.</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item store">
            <label className="label">월 택배건수</label>
            <div className="input">
              <div>
                <NumberInput
                  name='delivery'
                  control={control}
                  placeholder="월 택배건수를 작성해주세요."
                  required
                />
                <span>개</span>
            </div>
            {errors.delivery && <div className="errors">월 택배건수를 작성해주세요.</div>}
            </div>
          </div>
          <div className="form-item store">
            <label className="label">SKU 상품수</label>
            <div className="input">
              <div>
                <NumberInput
                  name='sku'
                  control={control}
                  placeholder="SKU 상품수를 작성해주세요."
                  required
                />
                <span>개</span>
            </div>
            {errors.sku && <div className="errors">SKU 상품수를 작성해주세요.</div>}
            </div>
          </div>
        </div>
        <div className="row radio">
          <div className="form-item store">
            <label className="label">택배포장방식</label>
            <div className="input">
              <div>
                <label><input {...register('deliveryType')} type="radio" value="폴리" />폴리</label>
                <label><input {...register('deliveryType')} type="radio" value="박스" />박스</label>
              </div>
              {errors.import && <div className="errors">택배포장방식을 선택해주세요.</div>}
            </div>
          </div>
          <div className="form-item store">
            <label className="label">임가공작업</label>
            <div className="input">
              <div>
                <label><input {...register('processing')} type="radio" value="필요" />필요</label>
                <label><input {...register('processing')} type="radio" value="불필요" />불필요</label>
              </div>
              {errors.processing && <div className="errors">임가공작업을 선택해주세요.</div>}
            </div>
          </div>
        </div>
        <div className="row radio">
          <div className="form-item store">
            <label className="label">에어캡사용</label>
            <div className="input">
              <div>
                <label><input {...register('aircap')} type="radio" value="필요" />필요</label>
                <label><input {...register('aircap')} type="radio" value="불필요" />불필요</label>
              </div>
              {errors.aircap && <div className="errors">에어캡사용을 선택해주세요.</div>}
            </div>
          </div>
          <div className="form-item store">
            <label className="label">반품엽서등</label>
            <div className="input">
              <div>
                <label><input {...register('return1')} type="radio" value="있음" />있음</label>
                <label><input {...register('return1')} type="radio" value="없음" />없음</label>
              </div>
              {errors.return1 && <div className="errors">반품엽서등을 선택해주세요.</div>}
            </div>
          </div>
        </div>
        <div className="form-item">
          <label className="label">
            상담내용
          </label>
          <div className="input">
            <textarea {...register('content', { required: true })} placeholder="문의하실 내용을 입력해 주세요." />
            {errors.content && <div className="errors">문의하실 내용을 입력해 주세요.</div>}
          </div>
        </div>
        <button type="submit">다음</button>
      </form>
    </div>
  )
};

export default Step1Form;