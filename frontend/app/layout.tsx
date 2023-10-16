import Side from "@/components/Side";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

import "./layout.scss";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ProgressBar />
        <div className="Layout__container">
          <div className="Layout__content">
            <Side />
            <div className="Layout__body">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
