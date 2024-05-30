import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavigationBar";
import NavigationChild from "./components/NavigationChild";
import MainSectionOne from "./components/MainSectionOne";
import MainSectionTwo from "./components/MainSectionTwo";
import Footer from "./components/Footer";
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
      <div className="MainSectionTwo">
        <MainSectionTwo />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
