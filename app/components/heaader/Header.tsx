import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <Link className={styles.linkElement} href={"/"}>
        Home
      </Link>
      <Link className={styles.linkElement} href={"/about"}>
        About
      </Link>
      <div className={styles.inputWrapper}>
        <input placeholder="Search..." />
        <button type="submit"></button>
      </div>
    </header>
  );
}
