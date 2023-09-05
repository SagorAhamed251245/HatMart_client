import Providers from "@/providers";
import "./globals.css";
import { Poppins } from "next/font/google";
import Toaster from "@/components/Shared/Toaster/Toaster";
import logo from "@/assets/icons/hatmartLogo.svg";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "HatMat",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      {/* <head>
        <link rel="icon" href={logo} type="svg" sizes="any" />
        <link rel="stylesheet" href="/styles.css" defer />
      </head> */}
      <Providers>
        <body className={`${poppins.className} scrollbar `}>
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
};
export default RootLayout;
