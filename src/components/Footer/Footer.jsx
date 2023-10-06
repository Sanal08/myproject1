import React from "react";
import styles from "../Footer/Footer.module.css"; // Создайте файл Footer.module.css с нужными стилями

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2023 Японская кухня по доставке</p>
        <p>Адрес: ул.Ойратская, г.Элиста, Калмыкия</p>
        <p>Телефон: +123456789</p>
        <p>Email: sanalkaruev11@yandex.ru</p>
      </div>
    </footer>
  );
}
