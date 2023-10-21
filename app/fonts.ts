import { Roboto, Reem_Kufi } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const reem_kufi = Reem_Kufi({
  subsets: ["latin"],
  display: "swap",
});
