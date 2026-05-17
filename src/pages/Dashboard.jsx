import { Route , Routes } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage";
import Users from "./Users";
import Developer from "./Developers"
import Project from "./Project";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard"
import TableDashboard from "../components/ui/TableDashboard/TableDashboard"
function Dashboard() {
  
    return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">

      <Sidebar/>
      <main className = "flex-grow-1">
      
      <Routes>
        <Route path = "/" element={<StatusPage/>} />

        <Route path = "/Users" element={<Users/>} > 
        {/* First child */}
        <Route index element={<TableDashboard />}/>
        {/*Second Child */}
        <Route path="add" element={<FormDashboard/>}/>
        </Route>
        
        <Route path = "/Project" element={<Project/>} >
        {/* First child */}
        <Route index element={<TableDashboard />}/>
        {/*Second Child */}
        <Route path="add" element={<FormDashboard/>}/>
         </Route>


        <Route path = "/Developers" element={<Developer />} >
        <Route index element={<TableDashboard />}/>
        <Route path="add" element={<FormDashboard/>}/>
        </Route>

        
      </Routes>
      </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
