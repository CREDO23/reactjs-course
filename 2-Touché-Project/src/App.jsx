import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/galley";
import Team from "./components/team";
import Footer from "./components/footer";
import Header from "./components/header";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <div className="title-section">
        <h3>Menu</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
      <Menu />
      <div className="title-section">
        <h3>Gallery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
      <Gallery />
      <div className="title-section">
        <h3>Meet our chefs</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
      <Team />
      <div id="contact" className="reservation-section">
        <h3>Want to make a reservation ?</h3>
        <p>Call 1-887-654-3210</p>
      </div>
      <Footer />
    </main>
  );
}
