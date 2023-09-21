import { InputType } from "../../../types/UiType";
import "./TextArea.scss";

const TextArea = ({ value, setValue, text }: InputType) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      className='textarea'
      value={value}
      onChange={handleInputChange}
      placeholder={text}
    ></textarea>
  );
};

export default TextArea;
