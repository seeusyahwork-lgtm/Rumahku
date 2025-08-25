import React from "react";
import Nabar from "./komponen/nabar";
import Footer from "./komponen/footer";
import Slideshow from "./komponen/slideshow";
import Panel from "./komponen/panel";
import Panel2 from "./komponen/Panel2";
import Panel3 from "./komponen/Panel3";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <Nabar/>
      {/* <Slideshow/> */}
      <Panel/>
      <Panel2/>
      <Panel3/>
      <Footer/>
    </div>
  );
}

export default App;
