import { Metadata } from "next";
import styles from "./layout.module.scss";
import Side from "@/components/Side";
import Footer from "@/components/Footer";
import classNames from "classnames";

import { reem_kufi, roboto } from "./fonts";
import "./globals.css";
// import ProgressBar from "@/components/ProgressBar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata: Metadata = {
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontFamily = [
    reem_kufi.style.fontFamily,
    roboto.style.fontFamily,
    'sans-serif',
  ].join(', ')
  return (
    <html lang="en">
      <body className="bg-gray-100" style={{ fontFamily }}>
        {/* <ProgressBar /> */}
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={classNames(styles["side"], "z-100 bg-gray-900")}>
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
