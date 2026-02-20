import { Link } from "react-router";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <div>
      <main>
        <section>
          <h2 className="text-3xl">Explore the Natural World</h2>
          <p>
            From the frozen tundra to the depths of the ocean, life finds a way.
            WildWatch is your guide to the incredible diversity of animals and
            the habitats they call home.
          </p>
          <Link to="/animals">Browse All Animals</Link>
        </section>

        <section>
          <h2 className="text-3xl">Featured Animal</h2>
          <h3>Snow Leopard</h3>
          <p>
            Found across the mountain ranges of Central Asia, the snow leopard
            is one of the most elusive big cats on the planet. Its thick fur and
            wide paws make it perfectly adapted to life at high altitude.
          </p>
          <Link to="/animals/1">Learn More</Link>
        </section>

        <h2 className="text-3xl m-10">Habitats</h2>
        <section className="flex flex-wrap gap-10">
            <Article title="Tropical Rainforest">
                <p>I am a child to the arcile component</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et commodi dolores velit voluptas vero sapiente aut, repellendus delectus. Praesentium doloribus nobis iste ab cumque atque ipsum ea. Nesciunt, atque?</p>
            </Article> 

            <Article title={'Arctic Tundra'}>
            <h2>
              Harsh, windswept, and frozen for most of the year — yet the tundra
              supports a surprising number of species that have evolved to
              endure its extreme conditions.
            </h2>
            <input type="date" />
            </Article>

          <Article title={`Coral Reef`}>
          <h3>Coral Reef Update!</h3>
            <p>
              Often called the rainforests of the sea, coral reefs cover less
              than 1% of the ocean floor but support around 25% of all marine
              species.
            </p>
          </Article>
        </section>

        <section className="mt-10">
          <h2>Did You Know?</h2>
          <ul>
            <li>
              There are over 8 million species of animals estimated to exist on
              Earth.
            </li>
            <li>
              The blue whale is the largest animal ever known to have lived.
            </li>
            <li>
              Migratory birds can travel up to 60,000 miles in a single year.
            </li>
            <li>
              Some species of jellyfish are considered biologically immortal.
            </li>
          </ul>
        </section>

        <section>
          <h2>Add to Our Database</h2>
          <p>
            Know an animal we're missing? Help us grow our collection by
            submitting a new animal and linking it to one of our existing
            habitats.
          </p>
          <Link to="/animals/new">Add an Animal</Link>
        </section>
      </main>

      <footer>
        <p>WildWatch &copy; 2025 — Built for education and exploration.</p>
      </footer>
    </div>
  );
}
