import List from "./components/content/listOfBlogs/List";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
