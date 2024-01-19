import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "MMy awesome portfolio",
  description: "Next Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
