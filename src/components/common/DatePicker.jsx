import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const CustomInput = forwardRef(
({ value, onClick },
ref) => {
  const date = new Date(value || '');
  const weekday = [
    "일.",
    "월.",
    "화.",
    "수.",
    "목.",
    "금.",
    "토.",
  ];

  const n = weekday[date.getDay()];
  return (
    <input
      ref={ref}
      defaultValue={`${value && `${value || ''} ${n || ''}`}`}
      onClick={onClick} placeholder="연도. 월. 일."
      readOnly
    />
  )
});

const DatePicker = ({ name, onChange, value }) => {
  return (
    <div className="react-date-picker">
      <ReactDatePicker
        locale={ko}
        name={name}
        selected={value}
        onChange={onChange}
        dateFormat="yyyy. MM. dd."
        placeholderText="연도. 월. 일."
        customInput={<CustomInput />}
      />
    </div>
  )
};

export default DatePicker;
