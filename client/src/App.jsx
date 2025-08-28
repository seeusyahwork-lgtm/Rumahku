import { Routes, Route } from "react-router-dom";
import PHome from "./pages/PHome";
import PUser from "./pages/PUser";
import PNotFound from "./pages/PNotFound";
import PAdmin from "./pages/PAdmin";
import PAdminM from "./pages/PAdminM";
import PAdminK from "./pages/PAdminK";
import PAdminP from "./pages/PAdminP";
import PAdminTP from "./pages/PAdminTP";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/PUser" element={<PUser />} />
        <Route path="/PAdmin" element={<PAdmin />} />
        <Route path="*" element={<PNotFound  />}/>
        <Route path="/DListProyek" element={<PAdminTP  />}/>
        <Route path="/DPengawas" element={<PAdminP  />}/>
        <Route path="/DKonsumen" element={<PAdminK  />}/>
        <Route path="/DMandor" element={<PAdminM />}/>


      </Routes>
    </>
  );
}

export default App;