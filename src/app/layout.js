import { Manrope } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { TaskProvider } from "@/context/TaskContext";

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
        <Theme>
          <TaskProvider>{children}</TaskProvider>
        </Theme>
      </body>
    </html>
  );
}
