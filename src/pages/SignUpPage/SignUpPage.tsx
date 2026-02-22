import css from "../../styles/auth.module.css";
import loginImage from "../../assets/images/login.jpg";

export default function SignUpPage() {
  return (
    <section className={css.signUp}>
      <div className={css.wrapper}>
        <div className={css.imageBlock}>
          <img src={loginImage} alt="City view" />
        </div>

        <div className={css.formBlock}>
          <h1 className={css.title}>Sign Up</h1>

          <form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <input type="email" id="email" placeholder="Email" className={css.input} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <input type="password" id="password" placeholder="Password" className={css.input} />
            </div>

            <button type="submit" className={css.button}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
