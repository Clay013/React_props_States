import "./App.css";
import Navbar from "./Components/Navbar";
import Textpage from "./Components/Textpage";

function App() {
  return (
    <div>
      <Navbar title= "Textboots" Aboutlink = "About us"/>
      <div className="container my-5">

      <Textpage Headings="Enter the text you want to analyze below" />

      
      </div>
    </div>
  );
}

export default App;
