import { Controller } from "react-hook-form";

const NumberInput = ({ name, required, placeholder, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <input 
          type="text" 
          name={name}
          value={value || ''}
          onChange={(e) => {
            onChange(e.target.value.replace(/[^0-9]/gi, ''))
          }}
          placeholder={placeholder}
        />
      )}
      rules={{
        required,
        pattern: /^[0-9]*$/
      }}
    />
  )
};

export default NumberInput;