import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import image1 from "./assets/FB-1.png";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <img alt="ts logo" src={image1} />
      <Info />
      <Dashboard />
    </div>
  );
}

export default App;
