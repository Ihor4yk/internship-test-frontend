import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { logout } from "../../features/auth/authSlice";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgot-password";
  const isAuthenticated = useSelector((s: RootState) => s.auth?.isAuthenticated);
  const userEmail = useSelector((s: RootState) => s.auth?.user?.email);

  const handleLogout = () => dispatch(logout());

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          {isAuthenticated ? (
            <>
              <p className={css.user}>Welcome, {userEmail}</p>
              <button className={css.link} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            !isAuthPage && (
              <>
                <Link className={css.link} to="/login">
                  Log In
                </Link>
                <Link className={css.link} to="/signup">
                  Sign Up
                </Link>
              </>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
