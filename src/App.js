import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black relative min-h-screen overflow-hidden">
      <div className="hidden md:flex absolute opacity-30">
        <img src="mainD.jpg" alt="" />
      </div>
      <div className="md:hidden opacity-30 absolute h-screen">
        <img src="mainS.jpg" alt="" className="h-full object-cover"/>
      </div>

      <div className="opacity-100 absolute min-w-full">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
