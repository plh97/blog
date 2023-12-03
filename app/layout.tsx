import styles from "./layout.module.scss";
import Side from "@/components/Side";
import Footer from "@/components/Footer";
import classNames from "classnames";

import { reem_kufi, roboto } from "./fonts";
// import ProgressBar from "@/app/ProgressBar";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/globals.css";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

export const metadata = {
  "google-adsense-account": "ca-pub-6302926892933340",
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
    "sans-serif",
  ].join(", ");
  return (
    <html lang="en">
      <Script
        async
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6302926892933340"
      />
      <body
        suppressHydrationWarning
        className="bg-gray-100"
        style={{ fontFamily }}
      >
        {/* <ProgressBar /> */}
        <div
          className={classNames(
            styles["content"],
            "md:w-[1200px] max-md:w-full"
          )}
        >
          <Side />
          <div
            className={classNames(
              "!pb-0",
              styles.body,
              "md:w-[calc(100%-16rem)] max-md:w-full",
              "md:p-5 max-md:p-3"
            )}
          >
            {children}
          </div>
        </div>
        <div
          className={classNames(
            styles.footer,
            "md:min-w-[1200px] w-full",
            "sticky bottom-0",
          )}
        >
          <Footer />
        </div>
      </body>
    </html>
  );
}
