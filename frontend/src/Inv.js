import React from "react";
import { useStateValue } from "./StateProvider";
import "./Inv.css";
import { useHistory } from "react-router-dom";

function Inv() {
  const history = useHistory();
  const [{ text, filter, id, data }, dispatch] = useStateValue();
  let item = data[id];
  const save = function (e) {
    let newDoc = document.querySelector("form");
    for (let i = 0; i < newDoc.length; i++) {
      let field = newDoc[i].name;
      let value = newDoc[i].value;
      data[id][field] = value;
    }
    console.log(data[id]);
    dispatch({
      type: "ITEM",
      data: data,
    });
    history.push("/");
  };
  return (
    <div className="inv">
      <form>
        <span>
          {" "}
          <input className="inp" name="name" type="text" defaultValue={item.name} />{" "}
        </span>
        <span>
          Code: <input className="inp" name="code" type="text" defaultValue={item.code} />
        </span>
        <span>
          City: <input className="inp" name="city" type="text" defaultValue={item.city} />
        </span>
        <span>
          Space:{" "}
          <input className="inp"
            name="space_available"
            type="text"
            defaultValue={item.space_available}
          />
        </span>
        <span>
          Type: <input className="inp" name="type" type="text" defaultValue={item.type} />
        </span>
        <span>
          Cluster:{" "}
          <input className="inp" name="cluster" type="text" defaultValue={item.cluster} />
        </span>
      </form>
      <button className="btn" onClick={save}>SAVE</button>
    </div>
  );
}

export default Inv;
