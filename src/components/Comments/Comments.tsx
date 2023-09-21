import { CommentsType, ItemType } from "../../types/ItemsListType";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import "./Comments.scss";
import { useState } from "react";

const Comments = ({ data, activeItemId, setItems, items }: CommentsType) => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [value, setValue] = useState("");

  const handleAddCommment = () => {
    if (value.trim() !== "") {
      const addComment = items.map((item: ItemType) => {
        if (item.id === activeItemId) {
          return {
            ...item,
            count: item.count + 1,
            comments: [...item.comments, { value, color: selectedColor }],
          };
        } else {
          return { ...item };
        }
      });

      setItems(addComment);
      localStorage.setItem("items", JSON.stringify(addComment));
      setValue("");
      setSelectedColor("black");
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor: string = e.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className='container'>
      <Title title={`Comments #${data[0]?.id || ""}`} />
      <ul style={{ padding: "0 10px 0 10px" }}>
        {!!data[0]?.comments &&
          data[0].comments.map((item, index) => (
            <li key={index} className='comment'>
              <div
                className='comment__color'
                style={{ background: item.color }}
              ></div>
              <div>
                <p className='comment__text'>{item.value}</p>
              </div>
            </li>
          ))}
      </ul>

      <div className='components'>
        <input
          type='color'
          id='body'
          name='body'
          className='input__color'
          value={selectedColor}
          onChange={handleColorChange}
        />

        <TextArea
          value={value}
          setValue={setValue}
          text='Type comment here...'
        />
        <Button
          handleClick={handleAddCommment}
          text='Add New'
          color='white'
          backGround='#007bff'
          height='3.75rem'
          hoverColor='#0069d9'
        />
      </div>
    </div>
  );
};
export default Comments;
