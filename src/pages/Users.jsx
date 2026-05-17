// import FormDashboard from "../components/ui/FormDashboard/FormDashboard";
import { Outlet } from "react-router-dom";
// import TableDashboard from "../components/ui/TableDashboard/TableDashboard"
function Users () {
const projectData = {
        profile: "Users Names",
        columns: ["#", "First Name", "Last Name", "Username"], 
        users: [
            { id: 1, firstName: "Mazen", lastName: "Amir", username: "@maz" },
            { id: 2, firstName: "Youssef", lastName: "Ismail", username: "@you" }
        ]
    };
    return ( 
    <>
    {/* <h1> Users</h1>
    <FormDashboard /> */}

    <section className="p-4">

    <Outlet context={projectData}/>

    </section>
    </>

);
}
export default Users ;