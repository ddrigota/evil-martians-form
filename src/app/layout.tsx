import Footer from "@/components/Layout/Footer";
import FormContainer from "@/components/FormContainer";
import Header from "@/components/Layout/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.scss";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Form Ever",
  description: "For EvilMartians",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main className={styles.main}>
            <FormContainer>{children}</FormContainer>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
