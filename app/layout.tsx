"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import styles from "./layout.module.scss";
import Side from "@/components/Side";
import Footer from "@/components/Footer";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ProgressBar /> */}
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={styles["side"]}>
              <Side />
            </div>
            <div className={styles["body"]}>{children}</div>
          </div>
          <div className={styles["footer"]}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
