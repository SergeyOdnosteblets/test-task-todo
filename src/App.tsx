import { useState, useEffect } from "react";
import "./App.scss";
import ItemsList from "./components/ItemsList/ItemsList";
import Comments from "./components/Comments/Comments";
import { ItemType } from "./types/ItemsListType";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [items, setItems] = useState([
    {
      value: "Test",
      id: 34496875,
      count: 1,
      comments: [{ value: "test comment", color: "black" }],
    },
  ]);
  const [activeItemId, setActiveItemId] = useState<number | null>(items[0]?.id);
  const [updateState, setUpdateState] = useState(true);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      if (items.length) {
        setItems(items);
      }
    }
    setUpdateState(!updateState);
  }, []);

  useEffect(() => {
    setActiveItemId(items[items.length - 1]?.id);
  }, [updateState]);

  return (
    <div className='App'>
      <Navbar />
      <div className='cards'>
        <ItemsList
          items={items}
          setItems={setItems}
          activeItemId={activeItemId}
          setActiveItemId={setActiveItemId}
          updateState={updateState}
          setUpdateState={setUpdateState}
        />
        <Comments
          data={items.filter((item: ItemType) => item.id == activeItemId)}
          setItems={setItems}
          activeItemId={activeItemId}
          items={items}
        />
      </div>
    </div>
  );
}

export default App;
