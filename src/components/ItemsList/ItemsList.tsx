import { useState } from "react";
import "./ItemsList.scss";
import Button from "../UI/Button/Button";
import Title from "../UI/Title/Title";
import Input from "../UI/Input/Input";
import { generateRandomDigitNumber } from "../../helpers/randomId";
import { ItemType, ItemsListType } from "../../types/ItemsListType";

const ItemsList = ({
  items,
  setItems,
  activeItemId,
  setActiveItemId,
  updateState,
  setUpdateState,
}: ItemsListType) => {
  const [value, setValue] = useState("");

  const handleAddItem = () => {
    event.preventDefault();
    if (value.trim() !== "") {
      const newItem = {
        id: generateRandomDigitNumber(),
        value,
        count: 0,
        comments: [],
      };
      setItems([...items, newItem]);
      setValue("");
      localStorage.setItem("items", JSON.stringify([...items, newItem]));
    }

    if (!items.length) {
      setUpdateState(!updateState);
    }
  };

  const handleDeleteItem = (id: number) => {
    const filteredItems = [...items].filter((item: ItemType) => item.id !== id);
    setItems(filteredItems);
    localStorage.setItem("items", JSON.stringify(filteredItems));
    setUpdateState(!updateState);
  };

  const handleActiveItem = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className='container'>
      <Title title='Items' />

      <form className='flexContainer'>
        <Input
          value={value}
          setValue={setValue}
          text='Type name here...'
          height='1.5rem'
        />
        <Button
          handleClick={handleAddItem}
          text='Add New'
          color='white'
          backGround='#17a2b8'
          height='2.25rem'
          hoverColor='#138496'
        />
      </form>

      {items.map((item: ItemType) => (
        <div
          key={item.id}
          className={item.id === activeItemId ? "item active" : "item"}
          onClick={() => handleActiveItem(item.id)}
        >
          <p>{item.value}</p>
          <div>
            <span className='count'>{item.count}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className='button__del'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
