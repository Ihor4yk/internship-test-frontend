import { useForm, Controller, type SubmitHandler, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { createApplication } from "../../features/applications/applicationSlice";
import css from "./ApplicationForm.module.css";
import { applicationSchema } from "../../features/applications/applicationSchema";

type ApplicationFormValues = {
  name: string;
  email: string;
  message: string;
  image?: File | null;
};

export default function ApplicationForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector((state: RootState) => state.applications);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: yupResolver(applicationSchema) as Resolver<ApplicationFormValues>,
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      image: undefined,
    },
  });

  const onSubmit: SubmitHandler<ApplicationFormValues> = data => {
    const payload = { ...data, image: data.image ?? null };
    dispatch(createApplication(payload));
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.info}>
          <span className={css.label}>Real Estate</span>
          <h2 className={css.title}>Get a Consultation</h2>
          <p className={css.description}>
            Leave your details and our expert will contact you to discuss the best investment opportunities tailored to
            your needs.
          </p>
          <ul className={css.benefits}>
            <li>✦ Free consultation</li>
            <li>✦ Personalised offer</li>
            <li>✦ Fast response within 24h</li>
          </ul>
        </div>

        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.field}>
            <label className={css.fieldLabel}>Your Name</label>
            <input
              {...register("name")}
              placeholder="John Doe"
              className={`${css.input} ${errors.name ? css.errorInput : ""}`}
            />
            {errors.name && <p className={css.errorMessage}>{errors.name.message}</p>}
          </div>

          <div className={css.field}>
            <label className={css.fieldLabel}>Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              className={`${css.input} ${errors.email ? css.errorInput : ""}`}
            />
            {errors.email && <p className={css.errorMessage}>{errors.email.message}</p>}
          </div>

          <div className={css.field}>
            <label className={css.fieldLabel}>Message</label>
            <textarea
              {...register("message")}
              placeholder="Tell us about your interests..."
              rows={4}
              className={`${css.input} ${css.textarea} ${errors.message ? css.errorInput : ""}`}
            />
            {errors.message && <p className={css.errorMessage}>{errors.message.message}</p>}
          </div>

          <div className={css.field}>
            <label className={css.fieldLabel}>
              Attachment <span className={css.optional}>(optional)</span>
            </label>
            <Controller
              control={control}
              name="image"
              render={({ field }) => {
                const file = field.value as File | null | undefined;
                const previewUrl = file instanceof File ? URL.createObjectURL(file) : null;

                return (
                  <div className={css.fileWrapper}>
                    <label className={css.fileLabel}>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={e => field.onChange(e.target.files ? e.target.files[0] : null)}
                        className={css.fileInput}
                      />
                      <span className={css.fileButton}>📎 Choose file</span>
                    </label>

                    {file && previewUrl && (
                      <div className={css.filePreview}>
                        <img src={previewUrl} alt="preview" className={css.previewImage} />
                        <span className={css.fileName}>{file.name}</span>
                        <button type="button" className={css.removeFile} onClick={() => field.onChange(null)}>
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                );
              }}
            />
            {errors.image && <p className={css.errorMessage}>{errors.image.message}</p>}
          </div>

          <button type="submit" className={css.submitButton} disabled={loading}>
            {loading ? <span className={css.loader} /> : "Send Request →"}
          </button>

          {error && <p className={css.errorMessageGlobal}>{error}</p>}
          {success && <p className={css.successMessage}>✓ Application sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}
