import css from "./Hero.module.css";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      className={css.hero}
      style={{
        backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(${heroImage})
    `,
      }}
    >
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>The chemical negatively charged</h1>
          <p className={css.subtitle}>
            Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the
            mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is{" "}
          </p>

          <button className={css.button}>Get started</button>
        </div>
      </div>
    </section>
  );
}
