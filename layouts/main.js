import Head from 'next/head';
import GoogleTagManager from '../modules/GoogleTagManager';


export default (props) => {
  return (
    <>
      <Head>
        <title>digital laboratory for media design and development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="robots" content="none" />
        <GoogleTagManager />
      </Head>
      <div className="wrapper">
        {props.children}
      </div>

      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *, *:after, *:before {
          box-sizing: inherit;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          margin: 0;
          padding: 0;
        }

        .wrapper {
          width: calc(100vw - 40px);
          height: calc(100vh - 40px);
          margin: 20px auto;
          padding: 20px;
          background: #f8f8ff;
          overflow: scroll;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      `}</style>
    </>
  );
}