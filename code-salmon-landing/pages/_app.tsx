// pages/_app.tsx
// import type { AppProps } from 'next/app';
// import '../styles/globals.css';

// export default function App({ Component, pageProps }: AppProps) {

//   return (
//     <div
//     className="relative min-h-screen bg-scroll bg-cover bg-top bg-center text-[#E5E5E5]"
//     style={{ backgroundImage: "url('/images/hero-bbg.jpg')",
//       backgroundSize: "120%"
//      }}
//   >
//     <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
//     <div className="relative z-10">
//       <Component {...pageProps} />
//     </div>
//   </div>
//   );
// }

// // pages/_app.tsx
// import '../styles/globals.css';

// export default function App({ Component, pageProps }) {
//   return (
// <div
//   className="relative min-h-screen bg-scroll bg-cover bg-top bg-center text-[#E5E5E5]"
//   style={{ backgroundImage: "url('/images/hero-bbg.jpg')",
//     backgroundSize: "120%"
//    }}
// >
//   <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
//   <div className="relative z-10">
//     <Component {...pageProps} />
//   </div>
// </div>
//   );
// }

import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className="relative min-h-screen bg-scroll bg-cover bg-center text-[#E5E5E5]"
        style={{
          backgroundImage: "url('/images/hero-bbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

// in className= after bg-cover bg-top 