// import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import styles from "./layout.module.scss";
import Side from "@/components/Side";
import Footer from "@/components/Footer";
import classNames from "classnames";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* <ProgressBar /> */}
        <div className={styles["container"]}>
          <div className={styles["content"]}>
            <div className={classNames(styles["side"], "bg-gray-900")}>
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
