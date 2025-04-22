import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./componets/menu";
import Footer from "./componets/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />


        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
