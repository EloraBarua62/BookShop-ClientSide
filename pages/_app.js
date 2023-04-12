import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


// import React from 'react';
// import Home from './index';

// const App = () => {
//     return (
//         <div>
//             <Home></Home>
//         </div>
//     );
// };

// export default App;
