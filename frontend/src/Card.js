import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Card({ data }) {
  const [{ text, filter, id }, dispatch] = useStateValue();

  const history = useHistory();
  const edit = function () {
    dispatch({
      type: "EDIT",
      id: data.id-1,
    });
    history.push("/inventory");
  };
  return (
    <div className="card" onClick={edit}>
      <b>{data.name}</b>
      <span>
        Code: <b>{data.code}</b>
      </span>
      <span>
        City: <b>{data.city}</b>
      </span>
      <span>
        Space: <b>{data.space_available}</b>
      </span>
      <span>
        Type: <b>{data.type}</b>
      </span>
      <span>
        Cluster: <b>{data.cluster}</b>
      </span>
    </div>
  );
}

export default Card;
