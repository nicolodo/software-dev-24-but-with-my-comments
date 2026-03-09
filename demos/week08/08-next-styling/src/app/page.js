// We need to import the classes from the module.css file
// We get an object containing unique class names
import styles from "@/styles/home.module.css";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <main>
      <p className={styles.text}>Hello</p>
      <Button content="click me!" />
    </main>
  );
}
