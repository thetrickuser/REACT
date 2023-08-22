import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const firebase_url =
  "https://react-http-c3d55-default-rtdb.firebaseio.com/cart.json";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    try {
      await fetch(firebase_url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
    } catch (ex) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error in sending cart data",
        })
      );
      throw new Error(ex.getMessage());
    }
    dispatch(
      uiActions.showNotification({
        status: "complete",
        title: "Sent",
        message: "Cart data added",
      })
    );
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "fetching",
        title: "Fetching",
        message: "Getting your cart data",
      })
    );
    try {
      const res = await fetch(firebase_url);
      const cartData = await res.json();
      dispatch(
        cartActions.replaceCart({
          products: cartData.products || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (ex) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Error in sending cart data",
        })
      );
      throw new Error(ex.getMessage());
    }
    dispatch(
      uiActions.showNotification({
        status: "complete",
        title: "Fetched",
        message: "Cart data fetched successfully",
      })
    );
  };
};
