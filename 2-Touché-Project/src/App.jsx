import small from "./assets/images/09-small.jpg";
import chef from "./assets/images/02.jpg";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";

export default function App() {
  return (
    <main>
      {/* <section style={{ backgroundColor: "violet" }} className="section">
        <h3 className="section-title">Section Title</h3>
      </section>
      <button className="btn btn-primary">Envoyer</button>
      <div className="portofolio  framed">
        <div className="portofolio-title">
          <p>Samoussa</p>
        </div>
        <img src={small} alt="small9" />
      </div>
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
    </main>
  );
}
