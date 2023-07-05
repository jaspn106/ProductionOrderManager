import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "POM: Home",
  description: "In progress site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
