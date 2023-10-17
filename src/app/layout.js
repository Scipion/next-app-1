import { Inter } from "next/font/google";
import "./globals.css";

import GlobalStyles from "../styles/GlobalStyles";
import StyledComponentsRegistry from "../../lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
