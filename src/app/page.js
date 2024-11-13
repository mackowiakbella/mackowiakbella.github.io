import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Coca-Cola</h1>
      <Image className={styles.img} src='/images/ccc.png' alt="Imagem Coca" width={400} height={400} / >
    </div>
  );
}