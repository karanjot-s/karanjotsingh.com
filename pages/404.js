import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/404.module.scss";

export default function FourOhFour() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>VOID;</h1>
      <h2 className={styles.h2}>404 - Page Not Found</h2>
      <div className={styles.btns}>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Go back
        </button>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
