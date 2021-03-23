import data from "./warehouses.json";
export const initialState = {
  text: "",
  filter: "Name",
  id: 0,
  data: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        text: action.text,
      };
    case "FILTER":
      return {
        ...state,
        filter: action.filter.toLowerCase(),
      };
    case "EDIT":
      return {
        ...state,
        id: action.id,
      };
    case "ITEM":
      // console.log(data);
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
