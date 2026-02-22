import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <Link className={css.link} to="/login">
            Log In
          </Link>
          <Link className={css.link} to="/signup">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
