import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";

class MyDocument extends Document{
    render() {
        return (
            <Html lang={'en'}>
                <Head>
                    <meta name={'description'} content={'Trevo ECommerce Website with Next.js'}/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"/>
                    <script src="https://kit.fontawesome.com/a076d05399.js" />
                    <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script>
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