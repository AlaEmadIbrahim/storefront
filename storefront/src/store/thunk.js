import request from "superagent";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const loadProducts = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

// ------------------Get-------------------------------

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

// ------------------Post-------------------------------

export const addRemoteProduct = (product) => {
  return async (dispatch) => {
    try {
      const response = await request
        .post("https://jsonplaceholder.typicode.com/products")
        .send(product);

      const newProduct = response.body;
      dispatch(addProduct(newProduct));
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
};

// ------------------Delete-------------------------------

export const deleteRemoteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await request.delete(
        `https://jsonplaceholder.typicode.com/products/${productId}`
      );

      dispatch(deleteProduct(productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
};
