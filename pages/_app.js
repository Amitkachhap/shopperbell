// pages/_app.js (or _app.tsx for TypeScript)

import '../src/styles/tailwind.css'; // Import your Tailwind CSS file from the src/styles directory
import '../src/app/globals.css'; // Import your globals CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
