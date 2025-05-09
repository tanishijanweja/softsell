import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoftSell – Sell Unused Software Licenses Easily",
  description:
    "SoftSell helps you resell unused software licenses. Simple, fast, and secure.",
  keywords: ["software resale", "sell licenses", "unused software", "SoftSell"],
  openGraph: {
    title: "SoftSell",
    description: "Sell your unused software licenses quickly and easily.",
    url: "https://softsell-two-alpha.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
