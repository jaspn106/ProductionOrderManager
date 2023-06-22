import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import ProvidersWrapper from "./ProvidersWrapper";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Jasons Next React App",
  description: "In progress site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <div>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </div>
      </body>
    </html>
  );
}
