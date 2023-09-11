const initialState = {
  categories: [
    { name: "MenPerfume", displayName: "MenPerfume" },
    { name: "WomenPerfume", displayName: "WomenPerfume" },
    { name: "UnisexPerfume", displayName: "UnisexPerfume" },
  ],
  activeCategory: "MenPerfume",
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "change":
      return { categories: state.categories, activeCategory: payload };
    default:
      return state;
  }
};

export const changeActiveCategory = (category) => {
  return {
    type: "change",
    payload: category,
  };
};

export default rootReducer;
