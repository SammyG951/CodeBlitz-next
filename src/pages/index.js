import Head from 'next/head';
import Welcome from "./components/Welcome.jsx";
import Game from "./components/Game.jsx";
import Footer from "./components/Footer.jsx"; 

export default function Home(){
    return (
      <>
        <Head>
          <title>CodeBlitz!</title>
        </Head>
        <div>
            
          <Welcome/>

          <Game />

          <Footer />

        </div>
      </>
    );
}