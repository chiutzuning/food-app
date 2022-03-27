import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
import Link from "next/link";

const FoodCard = ({ sushi }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${sushi._id}`} passHref>
        <Image src={sushi.img} alt="" width="530" height="530" />
      </Link>
      <h1 className={styles.title}>{sushi.title}</h1>
      <span className={styles.price}>${sushi.prices[0]}</span>
      <p className={styles.desc}>
        {sushi.desc}
      </p>
    </div>
  );
};

export default FoodCard;
