import React from "react";
import styles from "../../components/Item/Item.module.css";
import ItemForm from "../ItemFrom/ItemForm";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

export default function Item(props) {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
}
