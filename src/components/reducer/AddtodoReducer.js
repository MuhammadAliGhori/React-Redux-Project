const initialData = {
  list: [],
};
export const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    // add
    case "ADDTODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    // delete
    case "DELETTODO":
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    // remove-all
    case "REMOVETODO":
      return {
        ...state,
        list: [], 
      };
    default:
      return state;
  }
};
