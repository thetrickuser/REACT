import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            item={{
              title: cartItem.title,
              quantity: cartItem.quantity,
              total: cartItem.totalPrice,
              price: cartItem.price,
              id: cartItem.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
