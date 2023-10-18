"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import classNames from "classnames";
import "prism-material-themes/themes/material-default.css";

import "prismjs/components/prism-bash.min";
import "prismjs/components/prism-go.min";
import "prismjs/components/prism-less.min";
import "prismjs/components/prism-nand2tetris-hdl.min";
import "prismjs/components/prism-nginx.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-yaml.min";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-tsx.min";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-typescript.min";

import { fmtLang } from "@/utils/lang";

export default function Code({
  // plugins = ["line-numbers"],
  children,
  language = "txt",
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
