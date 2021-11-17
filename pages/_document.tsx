import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document";
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8"/>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
          <meta content="width=device-width, initial-scale=1" name="viewport"/>

        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
  );
  }
  }

  export default MyDocument;