import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
      <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/component/phone.png" alt="phone" width="150" height="150"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012-345-678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/" passHref>
            <Image src="/img/component/logo2.png" alt="logo2" width="100px" height="100px"/>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
              <Image src="/img/component/cart-1.png" alt="cart" width="40px" height="40px"/>
              <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
        <div className={styles.account}>
            <Image src="/img/component/account.png" alt="account" width="36px" height="36px"/>
            <a className={styles.texts} href="../pages/signin">Sign in</a>
        </div>
      </div>
    </div>
    )
  }

export default Navbar
