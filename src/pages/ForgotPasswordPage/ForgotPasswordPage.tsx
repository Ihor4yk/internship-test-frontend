import css from "./ForgotPasswordPage.module.css";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <section className={css.wrapper}>
      <div className={css.card}>
        <h1 className={css.title}>Forgot Password</h1>

        <p className={css.text}>This feature is not implemented in this test project.</p>

        <Link to="/login" className={css.button}>
          Back to Login
        </Link>
      </div>
    </section>
  );
}

// export default function ForgotPasswordPage() {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h1>Forgot Password</h1>
//       <p>This feature is not implemented in the test task.</p>
//     </div>
//   );
// }
