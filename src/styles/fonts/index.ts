import { Inter } from "next/font/google";

const InterInit = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-Inter",
});

export const inter = InterInit.className;
