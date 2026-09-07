import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Yash — Web & Software Development", template: "%s | Yash" },
  description: "Business websites, web applications, and practical digital solutions built to help you move forward.",
  keywords: ["website development", "freelance developer", "web application development", "software development"],
  openGraph: { title: "Yash — Web & Software Development", description: "Digital products built for real business momentum.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
