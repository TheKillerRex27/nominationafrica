import "react";
import { Routes, Route } from "react-router-dom";
import SuperAdmin from "./views/Dashboards/SuperAdmin";
import ManageAdmin from "./views/ManageAdmin";
import ManageUser from "./views/ManageUser";
import ManageNominee from "./views/ManageNominee";
import ManageAwards from "./views/ManageAwards";
import Reports from "./views/Reports";
import Settings from "./views/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SuperAdmin />} />
      <Route path="/dashboard" element={<SuperAdmin />} />
      <Route path="/manage-admin" element={<ManageAdmin />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/manage-nominee" element={<ManageNominee />} />
      <Route path="/manage-awards" element={<ManageAwards />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
