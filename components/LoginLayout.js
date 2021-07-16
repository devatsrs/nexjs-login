import Nav from "./Nav";
import Meta from "./Meta";
import styles from "../styles/Layout.module.css";

const LoginLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default LoginLayout;
