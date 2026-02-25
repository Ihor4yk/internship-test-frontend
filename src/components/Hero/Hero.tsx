import css from "./Hero.module.css";

export default function Hero() {
  const handleGetStarted = () => {
    const section = document.getElementById("consultation");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>The chemical negatively charged</h1>
          <p className={css.subtitle}>
            Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the
            mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is{" "}
          </p>

          <button className={css.button} onClick={handleGetStarted}>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
