import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({ children }) {
   const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar user={user} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
