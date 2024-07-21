"use client";

import { BiData, BiDesktop, BiServer } from "react-icons/bi";
import styles from "./styles.module.scss";

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>I&apos;m a Software Enginner</h1>
        <span>
          With 2 years of experience in Backend systems and Observability.
          I&apos;ve worked on multiple projects, where I hava improved
          application uptime, optimized resource utilization and developed
          product features.
        </span>
      </div>
      <div className={styles.stack}>
        <ul className={styles.stackUl}>
          <li className={styles.stackLi}>
            <h2>Backend</h2>
            <BiServer />
            <ul>
              <li>
                <h3>Java - Spring Boot</h3>
              </li>
              <li>
                <h3>JavaScript - NodeJs / NestJS</h3>
              </li>
            </ul>
          </li>

          <li className={styles.stackLi}>
            <h2>Databases</h2>
            <BiData />
            <ul>
              <li>
                <h3>Elasticsearch</h3>
              </li>
              <li>
                <h3>MySQL</h3>
              </li>
            </ul>
          </li>

          <li className={styles.stackLi}>
            <h2>Observability</h2>
            <BiDesktop />
            <ul>
              <li>
                <h3>ELK</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
