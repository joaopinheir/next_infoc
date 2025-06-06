import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./componets/menu";
import Footer from "./componets/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      


        <Main />
        <NextScript />
   
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
</body>
    </Html>
  );
}
