import Nabar from "./komponen/nabar";
import Footer from "./komponen/footer";
import Panel from "./komponen/panel";
import Panel2 from "./komponen/Panel2";
import Panel3 from "./komponen/Panel3";
import Dasboardheader from "./komponen/dasborad/fdasbord_komponen/header";
import Header from "./komponen/dasborad/admin";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Nabar />
      {/* <Slideshow/> */}
      {/* <Dasboardheader/> */}

      <Header/>

      <Panel />
      <Panel2 />
      <Panel3 />
      <Footer />




    </div>
  );
}

export default App;
