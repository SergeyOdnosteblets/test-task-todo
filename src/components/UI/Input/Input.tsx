import { InputType } from "../../../types/UiType";
import "./Input.scss";

const Input = ({ value, setValue, text, height }: InputType) => {
  const inputStyle = {
    minHeight: height,
  };

  return (
    <input
      className='input'
      style={inputStyle}
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={text}
      required
    />
  );
};
export default Input;
