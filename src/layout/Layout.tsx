import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
}
