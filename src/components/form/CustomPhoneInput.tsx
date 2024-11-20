import React from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

interface CustomPhoneInputProps {
  label: string;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;  
  name?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  label,
  error,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm mb-2 font-normal text-deepStateBlue"
      >
        {label}
      </label>
      <PhoneInput
        inputClass="appearance-none text-[#818894] bg-white border-inputBorder text-sm h-[39px] pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-darkRed"
        inputStyle={{ height: "38px", width: "100%" }}
        containerStyle={{ width: "100%" }}
        country={"in"}
        value={value || ""} 
        onChange={onChange}  
        placeholder={placeholder}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomPhoneInput;
