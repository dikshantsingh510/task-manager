import { Manrope } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Task manager",
  description: "Simple task manager to learn CRUD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manRope.variable}  font-sans`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
