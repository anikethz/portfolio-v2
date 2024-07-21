"use client";

import { Orbitron } from "next/font/google";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heroImage from "@images/hero-image.png";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: [ "400", "700"] });

export default function Hero (){

    

    return (
        <>
            <div className={styles.container}>
                <h1 className={classNames(styles.title, orbitron.className)}>I&apos;m Aniket Hazra</h1>
                <h2>Software Engineer, Problem Solver, Quick Learner</h2>
                {/* <p>Hello</p> */}
                <span>Learn more about me --{">"} </span>
                <div className={styles.social}>
                    <ul>
                        <li><FaGithub/></li>
                        <li><FaLinkedin/></li>
                        <li><FaXTwitter/></li>
                    </ul>
                </div>
            </div>
            <div className={styles.hero}>
                <Image src={heroImage} alt="Hero" />
            </div>
        </>
    )

}