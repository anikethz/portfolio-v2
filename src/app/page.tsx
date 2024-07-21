import Hero from "@components/landing/hero";
import styles from "./styles.module.scss";
import { About } from "@components/about";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
