import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App relative bg-black md:min-h-[100vh] min-h-[75vh] overflow-clip">
      <div className="hidden md:flex absolute opacity-30">
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
