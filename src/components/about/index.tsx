"use client";

import { BiData, BiDesktop, BiServer } from "react-icons/bi";
import styles from "./styles.module.scss";
import { Card } from "@components/common/card";
import { IconType } from "react-icons";
import { FunctionComponent, ReactNode } from "react";

export function About() {
  const stackItem: Array<{
    stackIcon: FunctionComponent;
    header: string;
    items: string[];
    content?: string;
  }> = [
    {
      stackIcon: BiServer,
      header: "Backend",
      items: ["Java - Spring Boot", "JavaScript - NodeJs/ NestJS"],
      content:
        "Developed a system for caching data from Salesforce and power search and application data for providers",
    },
    {
      stackIcon: BiData,
      header: "Databases",
      items: ["MySql", "Elasticsearch"],
    },
    {
      stackIcon: BiDesktop,
      header: "Observability",
      items: ["ELK"],
    },
  ];

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
        <Card>
          <ul className={styles.stackUl}>
            {stackItem.map((si) => (
              <li className={styles.stackLi} key={si.header}>
                <div className={styles.stackIcon}>
                  <si.stackIcon />
                </div>
                <h2>{si.header}</h2>
                <ul>
                  {si.items.map((item, idx) => (
                    <li key={idx}>
                      <h3>{item}</h3>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
