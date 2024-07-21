import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.scss";
import { NavBar, NavBarOptions } from "@components/navbar";
import classNames from "classnames";
import styles from "./styles.module.scss";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Aniket Hazra",
  description: "Aniket's Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuOptions: NavBarOptions[] = [
    {
        item: "Home",
        link: "#"
    },
    {
        item: "About",
        link: "#"
    },
    {
        item: "Projects",
        link: "#"
    }
  ]
  return (
    <html lang="en">
      <body className={classNames(lato.className, styles.body)}>
        <NavBar menuOptions={menuOptions}/>
        {children}
      </body>
    </html>
  );
}
