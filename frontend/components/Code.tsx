import React, { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-vsc-dark-plus.min.css";

export default function Code({
  children,
  language = 'Bash',
}: {
  children: ReactNode;
  language?: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <code className={`language-${language}`}>{children}</code>;
}
