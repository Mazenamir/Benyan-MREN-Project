import { Route , Routes } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Project from "./Project";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard"
import TableDashboard from "../components/ui/TableDashboard/TableDashboard"
function Dashboard() {
    return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">

      <Sidebar/>
      <main class = "flex-grow-1">
      
      <Routes>
        <Route path = "/" element={<StatusPage/>} />

        <Route path = "/Users" element={<Users/>} > 
        {/* First child */}
        <Route index element={<TableDashboard />}/>
        {/*Second Child */}
        <Route path="add" element={<FormDashboard/>}/>
        </Route>
        
        <Route path = "/Project" element={<Project/>} />
      </Routes>
      </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
