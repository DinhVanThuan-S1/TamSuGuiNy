import type { Metadata } from "next";
import { Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-handwritten",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Học cách yêu em 💗 Hộp Thư Tình Của Anh",
  description: "Anh không viết những điều này để trách em, anh chỉ muốn chúng mình hiểu nhau hơn một chút.",
  authors: [{ name: "Your Boyfriend" }],
  openGraph: {
    title: "Học cách yêu em 💗",
    description: "Hộp thư tình kỹ thuật số chứa đựng những tâm sự ấm áp và chân thành nhất.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${quicksand.variable} ${dancingScript.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-[#fff5f6] text-slate-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
