"use client";
import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
  return <AppProgressBar options={{ showSpinner: false }} shallowRouting />;
}
