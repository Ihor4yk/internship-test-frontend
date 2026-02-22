import { Link, useLocation } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          {!isAuthPage && (
            <>
              <Link className={css.link} to="/login">
                Log In
              </Link>
              <Link className={css.link} to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
