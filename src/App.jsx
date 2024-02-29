import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Test from './Test'

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar></Navbar>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portofolio">Parallax</section>
    <section>Portofolio1</section>
    <section>Portofolio2</section>
    <section>Portofolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
