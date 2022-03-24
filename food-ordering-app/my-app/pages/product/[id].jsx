import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { addProduct } from "../../redux/cartSlice";

const Product = ({ sushi }) => {
  const [price, setPrice] = useState(sushi.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  // const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  // if change the size, it will change the price
  const handleSize = (sizeIndex) => {
    const difference = sushi.prices[sizeIndex] - sushi.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  // if checked the box, it will change the price
  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  // const handleClick = () => {
  //   dispatch(addProduct({...sushi, extras, price, quantity}));
  // };


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={sushi.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{sushi.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{sushi.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/product-image/id-img/x6sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/product-image/id-img/x12sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/product-image/id-img/x24sushi.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {sushi.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            ))}
        </div>
        <div className={styles.add}>
            <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                className={styles.quantity}
              />
            <button className={styles.button} onClick={handleClick}>
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      sushi: res.data,
    },
  };
};


export default Product;
