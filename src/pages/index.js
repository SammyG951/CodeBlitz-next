import Head from 'next/head';
import Welcome from "../components/partials/Welcome";
import Game from "../components/partials/Game.jsx";
import Footer from "../components/partials/Footer.jsx"; 

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