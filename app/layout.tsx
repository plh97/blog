import styles from "./layout.module.scss";
import Side from "@/components/Side";
import Footer from "@/components/Footer";
import classNames from "classnames";

import { reem_kufi, roboto } from "./fonts";
// import ProgressBar from "@/app/ProgressBar";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/public/globals.css";
import Script from "next/script";

config.autoAddCss = false;

export const metadata = {
  "google-adsense-account": "ca-pub-6302926892933340",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//    navigator.serviceWorker.register('../public/sw.js').then( () => {
//     console.log('Service Worker Registered')
//    })
//  })
// }

const fontFamily = [
  reem_kufi.style.fontFamily,
  roboto.style.fontFamily,
  "sans-serif",
].join(", ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = 'Blog';
  const desc = `Peng's Personal Blog`;
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="description" content={desc} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://plhh.xyz" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content="https://plhh.xyz/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@plh_097" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content="https://plhh.xyz" />
        <meta property="og:image" content="https://plhh.xyz/icons/apple-touch-icon.png" />

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />

      </head>
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
              styles.body,
              "md:w-[calc(100%-16rem)] max-md:w-full",
              "md:p-5 max-md:p-3"
            )}
          >
            {children}
          </div>
        </div>
        <div className="bg-white md:min-w-[1200px] w-full sticky bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
