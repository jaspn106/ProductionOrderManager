import { GoogleSignInButton } from "../buttons/authButttons";
import styles from "./singInCard.module.css";

export default function SignInCard() {
  return (
    <div className={styles.container}>
      <h1>Continue by signing in with Google via the suspisious button</h1>
      <GoogleSignInButton />
    </div>
  );
}
