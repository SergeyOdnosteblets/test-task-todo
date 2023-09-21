import { useState } from "react";
import { ButtonType } from "../../../types/UiType";
import "./Button.scss";

const Button = ({
  handleClick,
  text,
  color,
  backGround,
  height,
  hoverColor,
}: ButtonType) => {
  const [isHovering, setIsHovering] = useState(false);
  const buttonStyle = {
    color,
    backgroundColor: !isHovering ? backGround : hoverColor,
    height,
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <button
      onClick={handleClick}
      className='button'
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      type='submit'
    >
      {text}
    </button>
  );
};
export default Button;
