import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='ja'>
                <Head>
                    <meta
                        name='description'
                        content='爬虫類・両生類専門店のNatureです。(架空のHPでございます)'
                    />
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1.0'
                    />
                    <title>Nature | 爬虫類・両生類専門店</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
