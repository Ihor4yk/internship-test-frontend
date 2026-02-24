import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RootState, AppDispatch } from "../../app/store";
import { clearError, register } from "../../features/auth/authSlice";
import { registerSchema, type RegisterFormData } from "../../features/auth/validationSchema";
import css from "./auth.module.css";
import AuthImage from "../../assets/images/auth.jpg";
import { useEffect } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authLoading = useSelector((s: RootState) => s.auth?.loading);
  const authError = useSelector((s: RootState) => s.auth?.error);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await dispatch(register(data)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={css.signUp}>
      <div className={css.wrapper}>
        <div className={css.imageBlock}>
          <img src={AuthImage} alt="City view" />
        </div>

        <div className={css.formBlock}>
          <h1 className={css.title}>Sign Up</h1>

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
                {...registerField("email")}
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
                {...registerField("password")}
              />
              {errors.password && <p className={css.fieldError}>{errors.password.message}</p>}
            </div>

            <button type="submit" className={css.button} disabled={authLoading}>
              {authLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
