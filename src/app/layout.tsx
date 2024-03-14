import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://getplus.vercel.app/"),
  title: "Plus Bharat ka jewellery savings app - Plus Gold",
  description:
    "Buy Digital Gold Online in India at Plus Gold. Start your digital gold investment today and redeem your investment as jewellery at a partner jeweller store.",
  icons: "https://storage.googleapis.com/getplus.in/images/whitelogo.png",
  openGraph: {
    title: "Buy Digital Gold Online | Digital Gold Investment - Plus Gold",
    description:
      "Buy Digital Gold Online in India at Plus Gold. Start your digital gold investment today and redeem your investment as jewellery at a partner jeweller store.",
    images: [
      {
        url: "https://storage.googleapis.com/getplus.in/images/plusNavLogo.png",
        width: 800,
        height: 600,
        alt: "Plus Gold",
      },
    ],
  },
  twitter: {
    title: "Buy Digital Gold Online | Digital Gold Investment - Plus Gold",
    description:
      "Buy Digital Gold Online in India at Plus Gold. Start your digital gold investment today and redeem your investment as jewellery at a partner jeweller store.",
    images: [
      {
        url: "https://storage.googleapis.com/getplus.in/images/plusNavLogo.png",
        width: 800,
        height: 600,
        alt: "Plus Gold",
      },
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="http://getplus.vercel.app/" />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
