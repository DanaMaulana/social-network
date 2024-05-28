import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavigationBar";
import MainSectionOne from "./components/MainSectionOne";
import NavigationChild from "./components/NavigationChild";
import "./my-style.module.scss";

function App() {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="NavigationChild">
        <NavigationChild />
      </div>
      <div className="MainSectionOne">
        <MainSectionOne />
      </div>
    </>
  );
}

export default App;
