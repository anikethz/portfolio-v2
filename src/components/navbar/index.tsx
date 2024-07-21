"use client";
import { BiMenu, BiX } from "react-icons/bi";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useState } from "react";

export interface NavBarOptions {
    item: string,
    link: string
}

export function NavBar ({menuOptions}: {menuOptions: NavBarOptions[]} ) {


    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);

    return (
        <div className={styles.container}>
            <nav className={styles.main}>
                <ul>
                    <li className={styles.logo}><a href="#">AH</a></li>
                    {menuOptions.map((i => 
                        <li className={styles.hideOnMobile} key={i.item}><a href={i.link}>{i.item}</a></li>
                    ))}
                    <li className={styles.menu}><a href="#" onClick={handleOpenMenu}><BiMenu/></a></li>
                </ul>
            </nav>
            { openMenu && <nav >
                <ul className={styles.sidebar}>
                    <li><a href="#" onClick={handleOpenMenu}><BiX /></a></li>
                    {menuOptions.map((i => 
                        <li key={i.item}><a href={i.link}>{i.item}</a></li>
                    ))}
                </ul>
            </nav>
            }
        </div>
    )
}