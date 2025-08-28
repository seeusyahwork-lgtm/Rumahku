import { Routes, Route } from "react-router-dom";
import PHome from "./pages/PHome";
import PUser from "./pages/PUser";
import PAdmin from "./pages/PAdmin";
import PNotFound from "./pages/PNotFound";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/PUser" element={<PUser />} />
        <Route path="/PAdmin" element={<PAdmin />} />
        <Route path="*" element={<PNotFound  />}/>
      </Routes>
    </>
  );
}

export default App;