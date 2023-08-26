import small from "./assets/images/09-small.jpg";
import chef from "./assets/images/02.jpg";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/galley";

export default function App() {
  return (
    <main>
      {/* <section style={{ backgroundColor: "violet" }} className="section">
        <h3 className="section-title">Section Title</h3>
      </section>
      <button className="btn btn-primary">Envoyer</button>
      
      <div className="chef-card">
        <div className="chef-image">
          <img src={chef} alt="chef" />
        </div>
        <div className="chef-details">
          <span className="name">Mike Doe</span>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            dapibus leo nec ornare diam.
          </p>
        </div>
      </div> */}
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
      <Gallery/>
      <div className="title-section">
        <h3>Meet our chefs</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
    </main>
  );
}
