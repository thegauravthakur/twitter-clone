import "../styles/app.css";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { Navigation } from "./Navigation";

function App() {
  return (
    <div className="app">
      <div className="app__section">
        <Navigation />
        <Content />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
