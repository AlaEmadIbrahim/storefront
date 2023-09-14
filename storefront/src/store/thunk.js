export const getRemoteData = () => {
  return async (dispatch) => {
    const raw = await fetch("https://midproject.onrender.com/users");
    const results = await raw.json();
    dispatch(loadProducts(results.results));
  };
};

export const loadProducts = (payload) => {
  return {
    type: "LOAD_PRODUCTS",
    payload,
  };
};
