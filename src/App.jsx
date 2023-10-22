import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Sidebar from "./components/sidebar/Sidebar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Cursor />
      <Sidebar />
      <section id="Homepage">
        <Parallax />
      </section>
      {/* <section id="About">
        <About />
      </section> */}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
