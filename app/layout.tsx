import type { Metadata } from "next";
import Nav from "@/src/components/ui/Nav";
import SocialLinks from "@/src/components/ui/SocialLinks";
import EmailLink from "@/src/components/ui/EmailLink";
import Footer from "@/src/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
        <SocialLinks />
        <EmailLink />
        <Footer />
      </body>
    </html>
  );
}
