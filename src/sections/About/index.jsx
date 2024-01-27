import React from "react";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section
      style={{ maxWidth: "800px", textAlign: "justify" }}
      className={styles.root}
    >
      <h3>
        Welcome to{" "}
        <span style={{ fontSize: "50px" }} className="secondaryFont">
          Freds Tattoo Studio
        </span>
      </h3>
      <p>
        In the enchanting tapestry of ink, my journey unfolded—a symphony of
        curiosity harmonizing with the brush of self-expression. From the tender
        embrace of novice enthusiasm to the dance of mastery, I wove my way
        through the diverse realms of design and technique, a dedicated acolyte
        in the sacred artistry of tattooing.
      </p>
      <p>
        Awakened by an unquenchable thirst to forge connections that transcend
        the ordinary, I, with resolute intent, birthed Fred's Tattoo Studio.
        More than a mere enterprise, it stands as an opus—an ode to tireless
        dedication, ceaseless learning, and the profound rapture found in
        transmuting passion into a life's craft.
      </p>
      <p>
        With each measured stroke of the needle, Fred's Tattoo Studio breathes
        life into a canvas, where narratives are etched, and the language of the
        soul is whispered. A sanctum where the art of ink transcends mere skin,
        becoming a testament to the sacred marriage of artistry and the profound
        joy of crafting one's destiny through the medium of tattoos.
      </p>
    </section>
  );
};
