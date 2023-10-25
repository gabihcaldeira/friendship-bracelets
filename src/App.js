import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import image from "./assets/ts.png";

function App() {
  return (
    <div className="App">
      <img alt="ts logo" src={image} />
      <Dashboard />
    </div>
  );
}

export default App;
