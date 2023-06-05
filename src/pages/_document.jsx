import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Days+One&display=swap"
          rel="stylesheet"
        />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>

        <link href="/assets/css/flaticon.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
