import React, { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import { fmtLang } from "@/utils/lang";
import classNames from "classnames";
import 'prism-material-themes/themes/material-default.css';
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-go";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";

export default function Code({
  children,
  language = "Bash",
  // plugins = ["line-numbers"],
}: {
  children: string;
  language?: string;
  plugins?: string[];
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <code className={classNames(`language-${fmtLang(language)}`)}>
      {children}
    </code>
  );
}
