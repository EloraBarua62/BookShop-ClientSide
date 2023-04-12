import Head from "next/head";
import { useRouter } from "next/router";
import Login from "../components/Login/Login";


export default function Home() {
  
    return (
      <div>
        <Head>
          <title>Knowledge</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <div className="home_one_banner">
            
            <div>
              <h1>READ BOOKS</h1>
              <h1>EXPLORE WORLD</h1>
            </div>
            
            <Login></Login>
            
          </div>
        </main>
      </div>
    );
};