// import FormDashboard from "../components/ui/FormDashboard/FormDashboard";
import { Outlet } from "react-router-dom";
// import TableDashboard from "../components/ui/TableDashboard/TableDashboard"
function Users () {

    return ( 
    <>
    {/* <h1> Users</h1>
    <FormDashboard /> */}

    <section className="p-4">

    <Outlet />

    </section>
    </>

);
}
export default Users ;