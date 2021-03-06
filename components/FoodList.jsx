import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard"
import Link from "next/link";

const FoodList = ({ foodList }) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>THE BEST JAPANESE RESTAURANT IN TOWN</h1>
      <p className={styles.desc}>
      Sushi makes a great choice for an office lunch, as you are bound to find something
      that suits different members of the team. Vegetarian sushi is common, and so are vegan
      options, which are often made with flavour-packed vegetables like avocados and mushrooms.
      </p>
      <div className={styles.wrapper}>
          {foodList.map((sushi) => (
              <FoodCard key={sushi._id} sushi={sushi} />
            ))}
      </div>
    </div>

  );
};

export default FoodList;
