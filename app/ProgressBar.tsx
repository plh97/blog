"use client";
import { AppProgressBar as Progress } from 'next-nprogress-bar';
import './ProgressBar.css'


export default function ProgressBar() {


  return (
    <Progress
      height="4px"
      style={"z-index: 99"}
      color="#fffd00"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
