import "normalize.css/normalize.css";
import "@/styles/App.scss";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import {
  ogImage,
  person,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${person.name}` },
  description: siteDescription,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.name,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [ogImage],
    firstName: person.firstName,
    lastName: person.lastName,
    username: person.username,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
};

// Old links used hash routing (e.g. /#/projects); send them to the real URLs.
const hashRedirect = `(function(){var h=location.hash;if(h.indexOf("#/projects")===0){location.replace("/projects/");}else if(h==="#/"||h==="#"){history.replaceState(null,"",location.pathname);}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: hashRedirect }} />
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
