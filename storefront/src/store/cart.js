const initialState = {
  cartItems: [],
  totalCartItems: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "addToCart":
      let exists = false;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].name === payload.name) {
          exists = true;
          state.cartItems[i].inCart += 1;
          state.totalCartItems += 1;
        }
      }
      if (!exists) {
        state.cartItems.push(payload);
        state.totalCartItems += 1;
      }
      return { ...state };

    case "REMOVE_FROM_CART":
      const updatedCartItems = state.cartItems.filter(
        (item) => item.name !== payload.name
      );
      const updatedTotalCartItems = state.totalCartItems - 1;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalCartItems: updatedTotalCartItems,
      };

    default:
      return state;
  }
};

export default cartReducer;

export const addToCart = (product) => {
  return {
    type: "addToCart",
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};
