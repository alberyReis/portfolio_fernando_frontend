import styles from "./Divisor.module.css";

export default function Divisor({ color, width }) {
  return (
    <>
      <hr
        className={styles.divisor}
        style={{ borderColor: color, width: width }}
      />
    </>
  );
}
