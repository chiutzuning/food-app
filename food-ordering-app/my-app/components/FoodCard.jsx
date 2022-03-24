import Image from "next/image";
import styles from "../styles/FoodCard.module.css";

const FoodCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/product-image/sushi/sushi-3.png" alt="" width="530" height="530" />
      <h1 className={styles.title}>NIGIRI SUSHI</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default FoodCard;
