import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RootState, AppDispatch } from "../../app/store";
import { clearError, login } from "../../features/auth/authSlice";
import { loginSchema, type LoginFormData } from "../../features/auth/validationSchema";
import css from "./auth.module.css";
import AuthImage from "../../assets/images/auth.jpg";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authLoading = useSelector((s: RootState) => s.auth?.loading);
  const authError = useSelector((s: RootState) => s.auth?.error);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={css.login}>
      <div className={css.wrapper}>
        <div className={css.imageBlock}>
          <img src={AuthImage} alt="City view" />
        </div>

        <div className={css.formBlock}>
          <h1 className={css.title}>Login</h1>

          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            {authError && <p className={css.authError}>{authError}</p>}

            <div className={css.formGroup}>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={`${css.input} ${errors.email ? css.inputError : ""}`}
                {...register("email")}
              />
              {errors.email && <p className={css.fieldError}>{errors.email.message}</p>}
            </div>

            <div className={css.formGroup}>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={`${css.input} ${errors.password ? css.inputError : ""}`}
                {...register("password")}
              />
              {errors.password && <p className={css.fieldError}>{errors.password.message}</p>}
            </div>

            <Link to="/forgot-password" className={css.link}>
              Forgot password?
            </Link>

            <button type="submit" className={css.button} disabled={authLoading}>
              {authLoading ? "Signing In..." : "Sign In"}
            </button>

            <p className={css.registerText}>
              Don't have account?{" "}
              <button type="button" className={css.linkSignUp} onClick={() => navigate("/signup")}>
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
