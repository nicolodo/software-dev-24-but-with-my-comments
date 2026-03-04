// We can destructure the object to use class names without dot notation
import { button } from "./button.module.css";

export default function Button({ content }) {
  return <button className={button}>{content}</button>;
}
