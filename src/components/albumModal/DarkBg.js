import styles from "./Modal.module.css";

const Darkbg = (props) => {
  return <div className={styles.darkBG} onClick={props.onClose}></div>;
};

export default Darkbg;
