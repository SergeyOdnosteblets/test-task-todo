export interface TitleType {
  title: string;
}

export interface InputType {
  value: string;
  setValue: (value: string) => void;
  text: string;
  height?: string;
}

export interface ButtonType {
  color: string;
  text: string;
  height: string;
  backGround: string;
  handleClick: () => void;
  hoverColor: string;
}
