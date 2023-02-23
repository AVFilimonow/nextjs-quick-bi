import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import React from "react";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    {/* AOS Animation */}
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/aos@next/dist/aos.css"
                    />
                </Head>
                <body className="">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
