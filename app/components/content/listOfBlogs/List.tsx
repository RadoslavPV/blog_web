import styles from "./page.module.css";

export default function Content() {
  return (
    <div className={styles.listBlogWrapper}>
      <img
        className={styles.titleImg}
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="idk"
      />
      <div className={styles.blogTitle}>Hello from content</div>
    </div>
  );
}
