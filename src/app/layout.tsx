import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "ZemenayTech - Revolutionize Your Digital Experience",
  description: "At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses. Empower your business with our cutting-edge solutions.",
  keywords: "web development, digital solutions, technology, software, Ethiopia, ZemenayTech",
  authors: [{ name: "ZemenayTech" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
