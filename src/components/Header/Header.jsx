import React from "react";
import styles from "./Header.module.css";
import sushiImg from "../../assets/sushi.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
export default function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
}
