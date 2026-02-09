import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <p>Working with props</p>

      <Header />
      <main>
        <Game game="Eldren Ring" img="https://m.media-amazon.com/images/M/MV5BMWNlMDBiYzYtMWMyMC00Zjc5LTlhMjItMjRlMzBmYmVkOGM0XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg" description="Eldren ring description"/>
        <Game game="wordle" img="https://nytco-assets.nytimes.com/2025/11/wordle-joining-times-graphic.png" description="words" />
        <Game game="balatro" img="https://sm.ign.com/t/ign_nordic/cover/b/balatro/balatro_dw6s.600.jpg" description="poker but more fun and not poker" />
        <Game game="golden sun" img="https://m.media-amazon.com/images/I/61fFxXqm3OL.jpg" description="a classic gba game" />
      </main>
      <Footer />
    </div>
  );
}

