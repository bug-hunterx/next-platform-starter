import Script from 'next/script';
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <Script id="aws-connect-chat" strategy="afterInteractive">
                  {`(function(w, d, x, id){
                    s=d.createElement('script');
                    s.src='https://my-test-instance-asdad12312-asdasd-12313.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
                    s.async=1;
                    s.id=id;
                    d.getElementsByTagName('head')[0].appendChild(s);
                    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
                  })(window, document, 'amazon_connect', '72e307ea-4767-4739-b3e8-c04adc34eeeb');
                  amazon_connect('styles', { iconType: 'CHAT_VOICE', openChat: { color: '#ffffff', backgroundColor: '#123456' }, closeChat: { color: '#ffffff', backgroundColor: '#123456'} });
                  amazon_connect('snippetId', 'QVFJREFIZ0JXUDRpTEE4cmZyV2xXczFoK1FVRnFIUjZkUU9mYTlTR2FNYytKUWduQXdGME9sbFNZdnBHR0VwWXZlWWF3ckdCQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNUFUyOXNUalZsN09BbGRHS0FnRVFnQ3NrL0ZObnJ2dnhhTktPK21NMi82NlQzZ3RwRnVnS0IxbG5BWDQyZlROdVhmcGU4eEpqSy8xN3AvWEo6OnJjeW43ai9VS3UxbGlFNmpOOXBvL3d3VWJodHRJbUt3dE4yaExKZzBCMlVUUm83SHFDc1Qramp2QSsxSjdRSEtkZ0RxaG1JbFR6YmNhSWtnVUU0VGVHMHEwazZjY1NqcUo4OUZTaXhTUTRXYm13MUI3RFRqY2pmUllLN1RGVnlEWWV0UVRrUisydnlHWEhtS3lLc1Q3ek9sNmk0SmtGVT0=');
                  amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown', 'application/vnd.amazonaws.connect.message.interactive', 'application/vnd.amazonaws.connect.message.interactive.response' ]);
                `}
                </Script>
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

