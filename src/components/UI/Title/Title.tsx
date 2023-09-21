import { TitleType } from "../../../types/UiType";
import "./Title.scss";
const Title = ({ title }: TitleType) => {
  return <h1 className='title'>{title}</h1>;
};
export default Title;
