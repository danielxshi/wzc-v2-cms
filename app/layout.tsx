import "./globals.scss";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import MobileNav from "./components/navigation/MobileNav";
import Footer from "./components/footer/Footer";
import DesktopNav from "./components/navigation/DesktopNavbar";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className="">
          <MobileNav />
          <DesktopNav />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
