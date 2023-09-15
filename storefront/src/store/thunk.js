import request from "superagent";

export const getRemoteData = () => {
  return async (dispatch) => {
    try {
      const response = await request.get(
        "https://jsonplaceholder.typicode.com/products"
      );
      const products = response.body;
      dispatch(loadProducts(products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const loadProducts = (payload) => {
  return {
    type: "LOAD_PRODUCTS",
    payload,
  };
};
