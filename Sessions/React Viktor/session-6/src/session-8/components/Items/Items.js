import { useState } from "react";
import "./Items.css";

function Items() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  function updateSearchText(e) {
    setSearchText(e.target.value);
  }

  function updateInputText(e) {
    setInputText(e.target.value);
  }

  function addItem() {
    setItems([inputText, ...items]);
    setInputText("");
  }

  function handleDelete(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onInput={updateSearchText}
        placeholder="Search"
      ></input>
      <br />
      <input
        type="text"
        value={inputText}
        onInput={updateInputText}
        placeholder="Item"
      />
      <button onClick={addItem}>Add</button>

      <ol>
        {items
          .filter((item) =>
            item.toLowerCase().includes(searchText.toLocaleLowerCase())
          )
          .map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Items;
