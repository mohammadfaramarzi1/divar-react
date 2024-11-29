import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <TailSpin color="#a62626" />
    </div>
  );
}

export default Loader;
