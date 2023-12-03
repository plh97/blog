"use client";
import Router from "next/router";
import NProgress from "nprogress";
import "./ProgressBar.css";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import { isCSR } from "@/utils/ssr";

Router.events.on("routeChangeStart", () => isCSR() && NProgress.start());
Router.events.on("routeChangeComplete", () => isCSR() && NProgress.done());
Router.events.on("routeChangeError", () => isCSR() && NProgress.done());

export default function ProgressBar() {
  if (isCSR()) {
    NProgress.start();
  }
  useEffect(() => {
    if (isCSR()) {
      NProgress.done();
    }
  }, []);
  return <></>;
}
