import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* <Link to="/" className={css.logo}>
          Logo
        </Link> */}

        <nav className={css.nav}>
          <Link to="/login">Log In</Link>
          <Link to="/login">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}
