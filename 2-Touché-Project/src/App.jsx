import small from "./assets/images/09-small.jpg";
import chef from "./assets/images/02.jpg";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <main>
      {/* <section style={{ backgroundColor: "violet" }} className="section">
        <h3 className="section-title">Section Title</h3>
      </section>
      <button className="btn btn-primary">Envoyer</button>
      <div className="menu">
        <h4 className="menu-title">Menu</h4>
        <ul className="items">
          <li className="menu-item">
            <div className="item-info">
              <span className="title">Title</span>
              <span className="price">$10</span>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum libero voluptates quia dolor unde adipisci tenetur.
            </p>
          </li>
          <li className="menu-item">
            <div className="item-info">
              <span className="title">Title</span>
              <span className="price">$10</span>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum libero voluptates quia dolor unde adipisci tenetur.
            </p>
          </li>
          <li className="menu-item">
            <div className="item-info">
              <span className="title">Title</span>
              <span className="price">$10</span>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum libero voluptates quia dolor unde adipisci tenetur.
            </p>
          </li>
          <li className="menu-item">
            <div className="item-info">
              <span className="title">Title</span>
              <span className="price">$10</span>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum libero voluptates quia dolor unde adipisci tenetur.
            </p>
          </li>
        </ul>
      </div>
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
      <Hero/>
    </main>
  );
}
