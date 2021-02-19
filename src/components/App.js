import "../styles/app.css";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { Navigation } from "./Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Content />
      <SideBar />
    </div>
  );
}

export default App;
