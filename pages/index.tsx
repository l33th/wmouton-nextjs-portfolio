import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const styles = {
  homeStyles: `bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0`,
  heroSec: `snap-center`,
};

export default function Home() {
  return (
    <div className={styles.homeStyles}>
      <Head>
        <title>WMouton Portfolio</title>
        <meta name="description" content="WMouton &bull; Sofware Engineer" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className={styles.heroSec}>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  );
}
