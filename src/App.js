import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-black min-h-screen relative overflow-hidden">
      <div className="hidden md:flex opacity-30 absolute">
        <img src="mainD.jpg" className="" alt="" />
      </div>
      <div className=" md:hidden opacity-30 absolute">
        <img src="mainS.jpg" alt="" />
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
