import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const sushi = {
    id: 1,
    img: "/img/product-image/sushi/sushi-3.png",
    name: "NIGIRI SUSHI",
    price: [19.9, 23.9, 30.9],
    desc: "Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top. The word nigiri comes from the Japanese nigirizushi, which translates as hand-pressed sushi.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={sushi.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{sushi.name}</h1>
        <span className={styles.price}>${sushi.price[size]}</span>
        <p className={styles.desc}>{sushi.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/product-image/id-img/x6sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/product-image/id-img/x12sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/product-image/id-img/x24sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="wasabi"
              name="wasabi"
              className={styles.checkbox}
            />
            <label htmlFor="wasabi">wasabi</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="ginger"
              name="ginger"
            />
            <label htmlFor="ginger">ginger</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="soy"
              name="soy"
            />
            <label htmlFor="soysauce">soy sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
