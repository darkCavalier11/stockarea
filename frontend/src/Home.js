import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Home.css";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ text, filter, id, data }, dispatch] = useStateValue();
  const [items, setItems] = useState(data);

  useEffect(() => {
    let fi = filter.toLowerCase();
    if (fi === "space available") {
      fi = "space_available";
    }
    let newItem = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i][fi].includes(text) ||
        data[i][fi].toLowerCase().includes(text)
      ) {
        newItem.push(data[i]);
      }
    }
    setItems(newItem);
  }, [text, filter, id, data]);
  return (
    <div className="home">
      {items.map((item) => (
        <Card data={item} key={item.id}></Card>
      ))}
    </div>
  );
}

export default Home;
