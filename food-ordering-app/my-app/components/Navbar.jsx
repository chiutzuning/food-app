import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
      <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/component/phone.png" alt="" width="150" height="150" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/component/logo2.png" alt="" width="100px" height="100px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/component/cart-1.png" alt="" width="40px" height="40px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
    )
  }

export default Navbar
