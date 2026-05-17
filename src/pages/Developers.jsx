// import FormDashboard from "../components/ui/FormDashboard/FormDashboard";
import { Outlet } from "react-router-dom";
// import TableDashboard from "../components/ui/TableDashboard/TableDashboard"
function Developer () {
const projectData = {
        profile: "Developers Names",
        columns: ["#", "First Name", "Company", "comp Mail"], 
        users: [
            { id: 1, firstName: "Mazen", lastName: "IBM", username: "@IBM" },
            { id: 2, firstName: "Youssef", lastName: "AWS", username: "@AWS" }
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
export default Developer ;
